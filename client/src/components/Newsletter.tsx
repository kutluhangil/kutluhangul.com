import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

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
          subject: `Yeni Bülten Aboneliği: ${email}`,
          from_name: "Portfolio Newsletter System",
          email: email,
          message: `${email} ismimli kullanıcı, proje ve blog güncellemeleri için bülteninize abone oldu.`
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubscribed(true);
        setEmail("");
        toast({
          title: "Successfully Subscribed!",
          description: "You will be notified about new articles and projects.",
        });
        setTimeout(() => setSubscribed(false), 5000);
      } else {
        toast({
          title: "Failed to subscribe",
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
    <section className="py-32 bg-background border-t border-border/40">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">Stay Updated</h2>
          <p className="text-muted-foreground font-light mb-12 text-lg">
            Get notified when I publish new articles about development, design, and building in public.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-muted/30 border border-border/40 text-foreground placeholder-muted-foreground outline-none transition-all hover:bg-muted/50 focus:bg-muted/50 focus:border-foreground/20 disabled:opacity-50"
                required
                disabled={isSubmitting}
                data-testid="input-email"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || subscribed}
              className="px-6 py-3 bg-foreground text-background font-medium text-sm uppercase tracking-wider transition-all hover:bg-foreground/90 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-subscribe"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4" />
                  Subscribed
                </>
              ) : (
                <>
                  {isSubmitting ? "Sending..." : "Subscribe"}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-xs text-muted-foreground mt-6 font-light">
            No spam, unsubscribe anytime. I respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
