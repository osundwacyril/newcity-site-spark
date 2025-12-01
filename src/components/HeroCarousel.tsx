import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import luckyGardens from "@/assets/lucky-gardens.jpg?format=webp&w=1200&q=80&imagetools";
import fahariGardens from "@/assets/fahari-gardens.jpg?format=webp&w=1200&q=80&imagetools";
import konza1 from "@/assets/konza-1.jpg?format=webp&w=1200&q=80&imagetools";
import eserian1 from "@/assets/eserian-1.jpg?format=webp&w=1200&q=80&imagetools";

const properties = [
  {
    id: 1,
    name: "Eserian Plains",
    location: "KCA University-Kitengela",
    price: "Ksh 350,000",
    image: eserian1,
    description: "Affordable plots with ready title deeds near KCA University - Deposit Ksh 35,000",
  },
  {
    id: 2,
    name: "Konza View Phase 2",
    location: "Konza Town",
    price: "Ksh 500,000",
    image: konza1,
    description: "Stunning views of Konza Technopolis - Deposit Ksh 150,000, Balance in 3 months",
  },
  {
    id: 3,
    name: "Fahari Gardens Phase 2",
    location: "Kampala University Kitengela",
    price: "Ksh 1,100,000",
    image: fahariGardens,
    description: "Prime plots near Kampala University - Deposit Ksh 300,000, Balance in 12 months",
  },
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % properties.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const currentProperty = properties[currentIndex];

  return (
    <div className="relative h-[560px] md:h-[660px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {properties.map((property, index) => (
          <div
            key={property.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={property.image}
              alt={property.name}
              loading={index === 0 ? "eager" : "lazy"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl text-white animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">{currentProperty.location}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            {currentProperty.name}
          </h1>

          <p className="text-lg md:text-xl mb-6 text-white/90 drop-shadow-md">
            {currentProperty.description}
          </p>

          <div className="flex items-center gap-6 mb-8">
            <div className="bg-background/95 backdrop-blur-sm px-6 py-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="text-2xl md:text-3xl font-bold text-primary">{currentProperty.price}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="accent-red" size="xl" asChild>
              <a href="#properties">View Properties</a>
            </Button>
            <Button variant="outline-hero" size="xl" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full transition-all hover:scale-110 shadow-lg"
        aria-label="Previous property"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full transition-all hover:scale-110 shadow-lg"
        aria-label="Next property"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
