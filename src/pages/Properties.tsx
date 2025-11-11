import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import luckyGardens from "@/assets/lucky-gardens.jpg";
import kcaPhase2Commercial from "@/assets/kca-phase2-commercial.jpg";
import fahariGardens from "@/assets/fahari-gardens.jpg";
import fahariPhase3 from "@/assets/fahari-phase3.jpg";
import kcaPhase2 from "@/assets/kca-phase2.jpg";
import kca1 from "@/assets/kca-1.jpg";
import konzaView from "@/assets/konza-view.jpg";
import eserianPlains from "@/assets/eserian-plains.jpg";
import acaciaPhase1 from "@/assets/acacia-phase1.jpg";

const properties = [
  {
    id: "1",
    name: "Eserian Plains",
    location: "KCA University-Kitengela",
    price: "Ksh 350,000",
    image: eserianPlains,
    size: "50*100",
    status: "Available",
    deposit: "Ksh 35,000",
    balance: "Balance in 12 months"
  },
  {
    id: "2",
    name: "Mazola 5 Milimani (Kitengela)",
    location: "1km Off Namanga Highway",
    price: "Ksh 2,500,000",
    image: eserianPlains,
    size: "40*90",
    status: "Hot Deal",
    deposit: "10%",
    balance: "Balance in 3 months"
  },
  {
    id: "3",
    name: "Konza View Phase 2",
    location: "Konza Town",
    price: "Ksh 500,000",
    image: konzaView,
    size: "50*100",
    status: "Hot Deal",
    deposit: "Ksh 150,000",
    balance: "Balance in 3 months"
  },
  {
    id: "4",
    name: "5 Acre Blocks For Sale (Kitengela)",
    location: "Opposite Kca University Kitengela",
    price: "Ksh 2,000,000",
    image: kcaPhase2,
    size: "5 Acre",
    status: "Premium",
    deposit: "10%",
    balance: "Balance in 3 months"
  },
  {
    id: "5",
    name: "University View Estate",
    location: "500 Meters to KCA University Kitengela",
    price: "Ksh 650,000",
    image: kca1,
    size: "50*100",
    status: "Available",
    deposit: "Ksh 65,000",
    balance: "Balance in 3 months"
  },
  {
    id: "6",
    name: "5 Acre Blocks Opposite Keda Ceramics",
    location: "3km From Umma University Touching Tarmac",
    price: "Ksh 5,500,000",
    image: kcaPhase2Commercial,
    size: "5 Acre",
    status: "Prime Location",
    deposit: "10%",
    balance: "Balance in 3 months"
  },
  {
    id: "7",
    name: "Acacia Phase 1",
    location: "Oloika Acacia-Kitengela",
    price: "Ksh 950,000",
    image: acaciaPhase1,
    size: "50*100",
    status: "Available",
    deposit: "Ksh 200,000",
    balance: "Balance in 6 months"
  },
  {
    id: "8",
    name: "4.6 Acre Blocks For Sale",
    location: "Touching Tarmac (Kisaju) Opposite Capital Blocks",
    price: "Ksh 12,000,000",
    image: kcaPhase2Commercial,
    size: "5 Acre",
    status: "Prime Location",
    deposit: "10%",
    balance: "Balance in 3 months"
  },
  {
    id: "9",
    name: "Fahari Gardens Phase 2",
    location: "Kampala University Kitengela",
    price: "Ksh 1,100,000",
    image: fahariGardens,
    size: "50*100",
    status: "Premium",
    deposit: "Ksh 300,000",
    balance: "Balance in 12 months"
  },
  {
    id: "10",
    name: "Lucky Gardens",
    location: "Lucky Base Shopping Centre /KAG Kitengela",
    price: "Ksh 1,300,000",
    image: luckyGardens,
    size: "50*100",
    status: "Hot Deal",
    deposit: "Ksh 300,000",
    balance: "Balance in 3 months"
  },
  {
    id: "11",
    name: "Fahari Gardens Phase 3",
    location: "Kampala University Kitengela",
    price: "Ksh 1,300,000",
    image: fahariPhase3,
    size: "50*100",
    status: "Premium",
    deposit: "Ksh 200,000",
    balance: "Balance in 3 months"
  },
];

const Properties = () => {
  const [searchParams] = useSearchParams();
  const [searchLocation, setSearchLocation] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const locationParam = searchParams.get("location");
    const maxPriceParam = searchParams.get("maxPrice");
    
    if (locationParam) {
      setSearchLocation(locationParam);
    }
    
    if (maxPriceParam) {
      const price = parseInt(maxPriceParam.replace(/[^0-9]/g, ""));
      if (price < 700000) {
        setPriceRange("low");
      } else if (price < 1200000) {
        setPriceRange("medium");
      } else {
        setPriceRange("high");
      }
    }
  }, [searchParams]);

  const clearFilters = () => {
    setSearchLocation("");
    setPriceRange("all");
    setStatusFilter("all");
  };

  const filteredProperties = properties.filter((property) => {
    const matchesLocation = searchLocation === "" || 
      property.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
      property.name.toLowerCase().includes(searchLocation.toLowerCase());
    
    const price = parseInt(property.price.replace(/[^0-9]/g, ""));
    const matchesPrice = 
      priceRange === "all" ||
      (priceRange === "low" && price < 700000) ||
      (priceRange === "medium" && price >= 700000 && price < 1200000) ||
      (priceRange === "high" && price >= 1200000 && price < 5000000) ||
      (priceRange === "premium" && price >= 5000000);
    
    const matchesStatus = statusFilter === "all" || 
      property.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesLocation && matchesPrice && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-[120px]">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                All Properties
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Browse through our complete collection of prime land opportunities across Kenya with ready title deeds and excellent infrastructure
              </p>
            </div>

            {/* Filters Section */}
            <div className="mb-12 p-6 rounded-xl border border-border bg-card shadow-[var(--shadow-card)] animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Filter Properties</h2>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={clearFilters}
                  className="gap-2"
                >
                  <X className="h-4 w-4" />
                  Clear Filters
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Location Search */}
                <div className="space-y-2">
                  <Label htmlFor="location">Search Location</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="Enter location..."
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                  <Label htmlFor="price">Price Range</Label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger id="price">
                      <SelectValue placeholder="Select price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="low">Under Ksh 700,000</SelectItem>
                      <SelectItem value="medium">Ksh 700,000 - 1,200,000</SelectItem>
                      <SelectItem value="high">Ksh 1,200,000 - 5,000,000</SelectItem>
                      <SelectItem value="premium">Above Ksh 5,000,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Status Filter */}
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="hot deal">Hot Deal</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="prime location">Prime Location</SelectItem>
                      <SelectItem value="new listing">New Listing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-4 text-sm text-muted-foreground">
                Showing {filteredProperties.length} of {properties.length} properties
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property, index) => (
                  <div
                    key={property.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <PropertyCard {...property} />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <p className="text-xl text-muted-foreground mb-4">
                    No properties found matching your filters
                  </p>
                  <Button variant="hero" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
