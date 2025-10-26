import { MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface PropertyCardProps {
  name: string;
  location: string;
  price: string;
  image: string;
  size: string;
  status: string;
}

export const PropertyCard = ({
  name,
  location,
  price,
  image,
  size,
  status,
}: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
          {status}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-5">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
          <div>
            <p className="text-sm text-muted-foreground">Plot Size</p>
            <p className="font-semibold text-foreground">{size}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="text-2xl font-bold text-primary">{price}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <TrendingUp className="h-4 w-4 text-accent" />
          <span>High appreciation potential</span>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 gap-2">
        <Button variant="hero" className="flex-1" asChild>
          <a href="#contact">View Details</a>
        </Button>
        <Button variant="outline" className="flex-1">
          Schedule Visit
        </Button>
      </CardFooter>
    </Card>
  );
};
