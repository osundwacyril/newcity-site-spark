import { useState } from "react";
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to invest in your future? Contact us today and let's find your perfect property
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of the following channels. Our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a
                      href="tel:+254700000000"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +254 700 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:info@newcitylands.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@newcitylands.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office</h4>
                    <p className="text-muted-foreground">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border shadow-[var(--shadow-card)]">
                <h4 className="font-semibold text-foreground mb-2">Office Hours</h4>
                <p className="text-muted-foreground text-sm">
                  Monday - Friday: 8:00 AM - 6:00 PM
                </p>
                <p className="text-muted-foreground text-sm">
                  Saturday: 9:00 AM - 4:00 PM
                </p>
                <p className="text-muted-foreground text-sm">
                  Sunday: Closed
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border shadow-[var(--shadow-card)]">
                <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com/newcitylands"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/newcitylands"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com/newcitylands"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/company/newcitylands"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <form
                onSubmit={handleSubmit}
                className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] border border-border space-y-6"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 700 000 000"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
