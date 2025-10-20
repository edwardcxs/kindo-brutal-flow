import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 border-t-4 border-primary relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="animate-slide-in-left">
            <h2 className="text-5xl font-bold mb-6">
              LET'S
              <br />
              <span className="text-accent">CONNECT_</span>
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Have a project in mind? Let's create something exceptional together.
            </p>

            <div className="space-y-6">
              <div className="brutalist-border bg-card/80 glass-morph p-6">
                <p className="font-mono text-xs text-accent mb-2">EMAIL</p>
                <a href="mailto:hello@edwardkindo.com" className="text-lg font-bold hover:text-accent transition-colors">
                  hello@edwardkindo.com
                </a>
              </div>

              <div className="brutalist-border bg-card/80 glass-morph p-6">
                <p className="font-mono text-xs text-accent mb-2">SOCIAL</p>
                <div className="flex gap-6">
                  {['BEHANCE', 'DRIBBBLE', 'LINKEDIN'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-sm font-bold hover:text-accent transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-mono text-xs uppercase mb-2 block">Name</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="brutalist-border h-12"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="font-mono text-xs uppercase mb-2 block">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="brutalist-border h-12"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-mono text-xs uppercase mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full brutalist-border bg-background p-4 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="brutalist-border brutalist-shadow-accent bg-accent text-accent-foreground hover:bg-accent/90 font-bold w-full h-12"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t-4 border-primary text-center animate-fade-in">
          <p className="font-mono text-sm text-muted-foreground">
            © 2024 EDWARD KINDO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
