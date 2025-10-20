import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";

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

  const socialLinks = [
    { icon: Mail, label: "EMAIL", href: "mailto:hello@edwardkindo.com", username: "hello@edwardkindo.com" },
    { icon: Linkedin, label: "LINKEDIN", href: "#", username: "/edwardkindo" },
    { icon: Github, label: "GITHUB", href: "#", username: "/edwardkindo" },
    { icon: Twitter, label: "TWITTER", href: "#", username: "@edwardkindo" }
  ];

  return (
    <section id="contact" className="py-32 border-t-4 border-primary/20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="animate-slide-in-left">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-accent" />
                <span className="font-mono text-sm text-accent tracking-wider">GET IN TOUCH</span>
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              LET'S
              <br />
              <span className="text-gradient glow-text">CONNECT</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Have a project in mind? Let's create something exceptional together. 
              I'm always open to discussing new opportunities and creative collaborations.
            </p>

            <div className="space-y-4 mb-12">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="brutalist-border bg-card/60 glass-morph p-6 flex items-center gap-4 group hover:bg-accent/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 border-2 border-accent flex items-center justify-center group-hover:bg-accent transition-colors">
                    <social.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-xs text-accent mb-1 tracking-wider">{social.label}</p>
                    <p className="font-bold group-hover:text-accent transition-colors">
                      {social.username}
                    </p>
                  </div>
                  <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                </a>
              ))}
            </div>

            <div className="brutalist-border bg-accent/10 glass-morph p-6">
              <p className="font-mono text-xs text-accent mb-2 tracking-wider">AVAILABILITY</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent animate-glow" />
                <p className="font-bold">Currently available for freelance projects</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-mono text-xs uppercase mb-3 block text-accent tracking-wider">
                  Your Name *
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="brutalist-border h-14 bg-card/60 glass-morph text-lg focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="font-mono text-xs uppercase mb-3 block text-accent tracking-wider">
                  Email Address *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="brutalist-border h-14 bg-card/60 glass-morph text-lg focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="font-mono text-xs uppercase mb-3 block text-accent tracking-wider">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full brutalist-border bg-card/60 glass-morph p-4 text-lg focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project, timeline, and goals..."
                />
              </div>

              <Button
                type="submit"
                className="brutalist-border brutalist-shadow-hover bg-accent text-accent-foreground hover:bg-accent/90 font-bold w-full h-14 text-lg group"
              >
                <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t-4 border-primary/20 text-center animate-fade-in">
          <div className="mb-6">
            <span className="font-mono text-6xl font-bold text-gradient">EK</span>
          </div>
          <p className="font-mono text-sm text-muted-foreground mb-2">
            © 2024 EDWARD KINDO. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed & Developed with <span className="text-accent">❤</span> in the Digital Realm
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
