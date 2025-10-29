import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const PropertySearch = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (maxPrice) params.append("maxPrice", maxPrice);
    navigate(`/properties?${params.toString()}`);
  };

  const popularLocations = ["Kiambu", "Machakos", "Nakuru", "Kajiado", "Nairobi"];

  return (
    <section className="py-12 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Search Properties
            </h2>
            <p className="text-muted-foreground text-lg">
              Find your perfect plot of land in Kenya
            </p>
          </div>

          <form
            onSubmit={handleSearch}
            className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-6 md:p-8 border border-border animate-scale-in"
          >
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* Location Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Location
                </label>
                <Input
                  type="text"
                  placeholder="Enter location..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-12"
                />
              </div>

              {/* Price Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  Max Price (Ksh)
                </label>
                <Input
                  type="text"
                  placeholder="Enter max price..."
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="h-12"
                />
              </div>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              <Search className="mr-2 h-5 w-5" />
              Search Properties
            </Button>
          </form>

          {/* Popular Locations */}
          <div className="mt-8 text-center animate-fade-in">
            <p className="text-sm text-muted-foreground mb-3">Popular locations:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popularLocations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocation(loc)}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
