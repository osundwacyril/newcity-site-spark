import { Link } from "react-router-dom";
import { PropertyCard } from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    name: "Riverside Plots",
    location: "Kiambu, Kenya",
    price: "Ksh 850,000",
    image: property1,
    size: "50x100 ft",
    status: "Available",
  },
  {
    id: 2,
    name: "Garden Estate",
    location: "Machakos, Kenya",
    price: "Ksh 1,200,000",
    image: property2,
    size: "1/4 Acre",
    status: "Hot Deal",
  },
  {
    id: 3,
    name: "Hilltop Haven",
    location: "Nakuru, Kenya",
    price: "Ksh 650,000",
    image: property3,
    size: "40x80 ft",
    status: "Available",
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
