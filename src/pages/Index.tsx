import { Navigation } from "@/components/Navigation";
import { GrandOpeningBanner } from "@/components/GrandOpeningBanner";
import { HeroCarousel } from "@/components/HeroCarousel";
import { PropertySearch } from "@/components/PropertySearch";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <GrandOpeningBanner />
      <main className="pt-[220px]">
        <HeroCarousel />
        <div className="container mx-auto px-4 py-8 flex justify-center">
          <Link to="/landing">
            <Button size="lg" variant="default" className="text-lg px-8 py-6">
              Book Land Now
            </Button>
          </Link>
        </div>
        <PropertySearch />
        <FeaturedProperties />
        <AboutSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
