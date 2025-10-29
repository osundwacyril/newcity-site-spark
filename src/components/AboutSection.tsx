import { CheckCircle, Shield, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "All properties come with verified title deeds and legal documentation",
  },
  {
    icon: TrendingUp,
    title: "High ROI",
    description: "Strategic locations with excellent appreciation potential",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Professional team to guide you through every step",
  },
  {
    icon: CheckCircle,
    title: "Ready Infrastructure",
    description: "Access roads, electricity, and water connections available",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose NewCity Real Estate?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide affordable, genuine plots for sale in Kenya with ready title deeds. 
              Your trusted partner in land investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 md:p-12 border border-border animate-scale-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  About NewCity Real Estate
                </h3>
                <p className="text-muted-foreground mb-4">
                  NewCity Real Estate offers affordable, genuine plots for sale in Kenya with ready title deeds.
                  We are the leading genuine real estate company in Kenya, committed to helping you secure 
                  your investment.
                </p>
                <p className="text-muted-foreground">
                  Our properties are strategically located in high-growth areas across Kenya, ensuring 
                  excellent returns on your investment. We provide comprehensive support throughout your 
                  purchase journey.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Properties Sold", value: "1,200+" },
                  { label: "Happy Clients", value: "800+" },
                  { label: "Locations", value: "15+" },
                  { label: "Years Experience", value: "10+" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between p-4 bg-secondary rounded-lg animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-muted-foreground font-medium">{stat.label}</span>
                    <span className="text-2xl font-bold text-primary">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
