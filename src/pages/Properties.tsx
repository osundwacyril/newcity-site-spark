import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import luckyGardens from "@/assets/lucky-gardens.jpg";
import kcaPhase2Commercial from "@/assets/kca-phase2-commercial.jpg";
import fahariGardens from "@/assets/fahari-gardens.jpg";
import kcaPhase2 from "@/assets/kca-phase2.jpg";
import konzaView from "@/assets/konza-view.jpg";
import eserianPlains from "@/assets/eserian-plains.jpg";

const properties = [
  {
    id: 1,
    name: "Lucky Gardens",
    location: "Lucky Base Shopping Centre, KAG",
    price: "Ksh 1,300,000",
    image: luckyGardens,
    size: "Commercial Plot",
    status: "Hot Deal",
  },
  {
    id: 2,
    name: "KCA Phase 2",
    location: "KCA University, Kitengela",
    price: "Ksh 650,000",
    image: kcaPhase2,
    size: "Ready Title",
    status: "Available",
  },
  {
    id: 3,
    name: "Fahari Gardens Phase 2",
    location: "Kampala University, KAG Kitengela",
    price: "Ksh 1,100,000",
    image: fahariGardens,
    size: "1.5KM Off Tarmac",
    status: "Premium",
  },
  {
    id: 4,
    name: "KCA Phase 2 Commercial",
    location: "KCA Kitengela",
    price: "Ksh 650,000",
    image: kcaPhase2Commercial,
    size: "Commercial Plot",
    status: "Available",
  },
  {
    id: 5,
    name: "Konza View Phase 2",
    location: "Konza, Kenya",
    price: "Ksh 500,000",
    image: konzaView,
    size: "Ready Title",
    status: "Hot Deal",
  },
  {
    id: 6,
    name: "Eserian Plains",
    location: "Kajiado, Kenya",
    price: "Ksh 350,000",
    image: eserianPlains,
    size: "Ready Title Deeds",
    status: "Available",
  },
];

const Properties = () => {
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
