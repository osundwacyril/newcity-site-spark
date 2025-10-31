import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { Award, Users, History } from "lucide-react";
import ndirituPhoto from "@/assets/team/ndiritu-mathenge.jpg";
import samuelPhoto from "@/assets/team/samuel-mwangi.jpg";
import veronicaPhoto from "@/assets/team/veronica.jpg";
import gracePhoto from "@/assets/team/grace-njeri.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Peter N. Mathenge",
      role: "Chief Executive Officer",
      bio: "Experience in real estate development and investment",
      photo: ndirituPhoto,
    },
    {
      name: "Charity Ngingo",
      role: "Director",
      bio: "Managing director",
      photo: gracePhoto,
    },
    {
      name: "Samuel Mwangi",
      role: "Sales and Property Manager",
      bio: "Expert in property sales with a track record of 100+ successful transactions",
      photo: samuelPhoto,
    },
    {
      name: "Veronica",
      role: "Sales Agent",
      bio: "Specialized in property sales management and client relations",
      photo: veronicaPhoto,
    },
  ];

  const awards = [
    {
      year: "2025",
      title: "Pacesetter In Affordable Land Solutions & Ownership",
      organization: "Jubilant Stewards of Africa Pacesetters International Awards",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-[120px]">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About New City Real Estate</h1>
              <p className="text-lg text-muted-foreground">
                Your trusted partner in finding genuine and affordable plots in Kenya
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <History className="h-8 w-8 text-accent-red" />
                <h2 className="text-3xl font-bold">Our History</h2>
              </div>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  Founded in 2024, New City Real Estate has grown to become one of Kenya's most trusted property 
                  companies. What started as a small team with a vision to make property ownership accessible has 
                  evolved into a full-service real estate firm serving hundreds of satisfied clients.
                </p>
                <p className="text-lg">
                  Over the years, we've facilitated the purchase and sale of properties 
                  helping families find their dream homes and investors secure profitable properties. Our commitment 
                  to transparency, integrity, and exceptional service has earned us recognition across the industry.
                </p>
                <p className="text-lg">
                  Today, we operate across multiple counties in Kenya, offering prime residential and commercial 
                  properties in strategic locations. Our portfolio includes developments in 
                  Kajiado, and other growing urban centers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12 justify-center">
                <Users className="h-8 w-8 text-accent-red" />
                <h2 className="text-3xl font-bold">Our Team</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-accent-red/20">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                    <p className="text-accent-red text-center mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-center text-sm">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-12 justify-center">
                <Award className="h-8 w-8 text-accent-red" />
                <h2 className="text-3xl font-bold">Awards & Recognition</h2>
              </div>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="flex gap-6 p-6 bg-card rounded-lg border border-border hover:border-accent-red/50 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-accent-red/10 flex items-center justify-center">
                        <Award className="h-8 w-8 text-accent-red" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-accent-red font-semibold mb-1">{award.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                      <p className="text-muted-foreground">{award.organization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <VideoTestimonials />
      </main>
      <Footer />
    </div>
  );
};

export default About;
