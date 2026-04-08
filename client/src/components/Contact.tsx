import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useCreateMessage } from "@/hooks/use-messages";
import { Loader2 } from "lucide-react";

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
  });
  
  const { mutate: sendMessage, isPending } = useCreateMessage();

  const onSubmit = (data: InsertMessage) => {
    sendMessage(data, {
      onSuccess: () => reset(),
    });
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
                disabled={isPending}
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
                disabled={isPending}
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
              disabled={isPending}
            />
            {errors.message && (
              <span className="absolute -bottom-6 left-0 text-xs text-red-400">{errors.message.message}</span>
            )}
          </div>

          <div className="text-center pt-8">
            <button
              type="submit"
              disabled={isPending}
              className="border border-background text-background hover:bg-background hover:text-foreground px-12 py-4 text-xs tracking-widest uppercase transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-3"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
