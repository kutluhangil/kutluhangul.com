import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: InsertMessage) => {
    setIsSubmitting(true);
    
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
      
      if (!accessKey) {
        toast({
          title: "Configuration Error",
          description: "Web3Forms Access Key is missing. Please configure it in your Vercel Environment Variables.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio İletişim Formu: ${data.name}`,
          from_name: data.name,
          email: data.email,
          message: data.message
        })
      });

      const result = await response.json();
      if (result.success) {
        reset();
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
      } else {
        toast({
          title: "Failed to send",
          description: "Something went wrong on the server. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 md:py-48 bg-foreground text-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-6">Let's Work Together</h2>
          <p className="text-background/60 font-light max-w-lg mx-auto">
            Open to full-time roles, freelance projects, and collaborations. Let's build something great.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <input
                {...register("name")}
                type="text"
                placeholder="Name"
                className="bg-transparent border-0 border-b border-background/30 rounded-none px-0 py-4 w-full focus:outline-none focus:border-background text-background placeholder:text-background/40 transition-colors"
                disabled={isSubmitting}
              />
              {errors.name && (
                <span className="absolute -bottom-6 left-0 text-xs text-red-400">{errors.name.message}</span>
              )}
            </div>
            
            <div className="relative">
              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-0 border-b border-background/30 rounded-none px-0 py-4 w-full focus:outline-none focus:border-background text-background placeholder:text-background/40 transition-colors"
                disabled={isSubmitting}
              />
              {errors.email && (
                <span className="absolute -bottom-6 left-0 text-xs text-red-400">{errors.email.message}</span>
              )}
            </div>
          </div>

          <div className="relative">
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Your inquiry..."
              className="bg-transparent border-0 border-b border-background/30 rounded-none px-0 py-4 w-full focus:outline-none focus:border-background text-background placeholder:text-background/40 transition-colors resize-none"
              disabled={isSubmitting}
            />
            {errors.message && (
              <span className="absolute -bottom-6 left-0 text-xs text-red-400">{errors.message.message}</span>
            )}
          </div>

          <div className="text-center pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-background text-background hover:bg-background hover:text-foreground px-12 py-4 text-xs tracking-widest uppercase transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-3"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
