import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-[120px]">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
              <p className="text-lg text-muted-foreground">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-accent-red/10 flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-accent-red" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          Opposite Kitengela Mall<br />
                          Betty Business Centre<br />
                          Family Bank Building, 2nd Floor, Room 212<br />
                          Kitengela-Nairobi, Kenya
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-accent-red/10 flex items-center justify-center">
                          <Phone className="h-6 w-6 text-accent-red" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a 
                          href="tel:+254742498498" 
                          className="text-muted-foreground hover:text-accent-red transition-colors"
                        >
                          +254742 498 498
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-accent-red/10 flex items-center justify-center">
                          <Mail className="h-6 w-6 text-accent-red" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a 
                          href="mailto:info@newcitylands.com" 
                          className="text-muted-foreground hover:text-accent-red transition-colors"
                        >
                          info@newcitylands.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-accent-red/10 flex items-center justify-center">
                          <Clock className="h-6 w-6 text-accent-red" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form name="contact" method="POST" data-netlify="true" className="space-y-4">
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      required 
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required 
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Find Us Here</h2>
              <div className="rounded-lg overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7745871234567!2d36.9550692!3d-1.4792598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f9f2d813233e5%3A0xa88564854ed8e2b2!2sNEWCITY%20REAL%20ESTATE!5e0!3m2!1sen!2ske!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="New City Real Estate Office Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
