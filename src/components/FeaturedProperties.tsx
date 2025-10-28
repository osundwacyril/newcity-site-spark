import { Link } from "react-router-dom";
import { PropertyCard } from "./PropertyCard";
import luckyGardens from "@/assets/lucky-gardens.jpg";
import kcaPhase2 from "@/assets/kca-phase2.jpg";
import fahariGardens from "@/assets/fahari-gardens.jpg";

const properties = [
  {
    id: "1",
    name: "Lucky Gardens",
    location: "Lucky Base Shopping Centre, KAG",
    price: "Ksh 1,300,000",
    image: luckyGardens,
    size: "Commercial Plot",
    status: "Hot Deal",
  },
  {
    id: "2",
    name: "KCA Phase 2",
    location: "KCA University, Kitengela",
    price: "Ksh 650,000",
    image: kcaPhase2,
    size: "Ready Title",
    status: "Available",
  },
  {
    id: "3",
    name: "Fahari Gardens Phase 2",
    location: "Kampala University, KAG Kitengela",
    price: "Ksh 1,100,000",
    image: fahariGardens,
    size: "1.5KM Off Tarmac",
    status: "Premium",
  },
];

export const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Featured Properties
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover prime land opportunities across Kenya with ready title deeds and excellent infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Link
            to="/properties"
            className="text-primary hover:text-primary-glow font-semibold inline-flex items-center gap-2 transition-colors"
          >
            View All Properties
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
