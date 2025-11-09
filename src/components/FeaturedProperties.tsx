import { Link } from "react-router-dom";
import { PropertyCard } from "./PropertyCard";
import luckyGardens from "@/assets/lucky-gardens.jpg";
import kca1 from "@/assets/kca-1.jpg";
import fahariGardens from "@/assets/fahari-gardens.jpg";
import konzaView from "@/assets/konza-view.jpg";

const properties = [
  {
    id: "3",
    name: "Konza View Phase 2",
    location: "Konza Town",
    price: "Ksh 500,000",
    image: konzaView,
    size: "50*100",
    status: "Hot Deal",
    remaining: 8,
    totalPlots: 30,
  },
  {
    id: "5",
    name: "KCA University",
    location: "500 Meters to KCA University Kitengela",
    price: "Ksh 650,000",
    image: kca1,
    size: "50*100",
    status: "Available",
    remaining: 15,
    totalPlots: 50,
  },
  {
    id: "9",
    name: "Fahari Gardens Phase 2",
    location: "Kampala University Kitengela",
    price: "Ksh 1,100,000",
    image: fahariGardens,
    size: "50*100",
    status: "Premium",
    remaining: 12,
    totalPlots: 40,
  },
];

export const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            <span className="text-accent-red">Featured</span> Properties
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
