import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Ruler, TrendingUp, Phone, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import luckyGardens from "@/assets/lucky-gardens.jpg";
import fahariGardens from "@/assets/fahari-gardens.jpg";
import konzaView from "@/assets/konza-view.jpg";
import kcaPhase2 from "@/assets/kca-phase2.jpg";
import kcaCommercial from "@/assets/kca-phase2-commercial.jpg";
import eserianPlains from "@/assets/eserian-plains.jpg";
import property1 from "@/assets/property-1.jpg";

const properties = [
  {
    id: "1",
    name: "Eserian Plains",
    location: "KCA University-Kitengela",
    price: "Ksh 350,000",
    deposit: "Ksh 35,000",
    image: eserianPlains,
    size: "50*100",
    status: "Available",
    description: "Prime residential plots near KCA University with ready title deeds",
    amenities: [
      "Ready Title Deeds",
      "50*100 Plot Size",
      "Deposit: Ksh 35,000",
      "Balance in 12 months",
      "Near KCA University",
      "Good Infrastructure"
    ]
  },
  {
    id: "2",
    name: "Konza View Phase 2",
    location: "Konza Town",
    price: "Ksh 500,000",
    deposit: "Ksh 150,000",
    image: konzaView,
    size: "50*100",
    status: "Hot Deal",
    description: "Affordable residential plots with stunning views of the Konza Technopolis",
    amenities: [
      "Ready Title Deeds",
      "50*100 Plot Size",
      "Deposit: Ksh 150,000",
      "Balance in 3 months",
      "Konza Technopolis Views",
      "Investment Opportunity"
    ]
  },
  {
    id: "3",
    name: "KCA University",
    location: "500 Meters to KCA University Kitengela",
    price: "Ksh 650,000",
    deposit: "Ksh 65,000",
    image: kcaPhase2,
    size: "50*100",
    status: "Available",
    description: "Prime commercial plots near KCA University offering excellent investment potential",
    amenities: [
      "Ready Title Deeds",
      "50*100 Plot Size",
      "Deposit: Ksh 65,000",
      "Balance in 3 months",
      "500 meters from KCA University",
      "High Rental Demand"
    ]
  },
  {
    id: "4",
    name: "Acacia Phase 1",
    location: "Oloika Acacia-Kitengela",
    price: "Ksh 950,000",
    deposit: "Ksh 200,000",
    image: property1,
    size: "50*100",
    status: "Available",
    description: "Prime residential plots in Oloika with excellent infrastructure and accessibility",
    amenities: [
      "Ready Title Deeds",
      "50*100 Plot Size",
      "Deposit: Ksh 200,000",
      "Balance in 6 months",
      "Excellent Infrastructure",
      "Prime Location"
    ]
  },
  {
    id: "5",
    name: "Fahari Gardens Phase 2",
    location: "Kampala University Kitengela",
    price: "Ksh 1,100,000",
    deposit: "Ksh 300,000",
    image: fahariGardens,
    size: "50*100",
    status: "Premium",
    description: "Beautiful residential plots near Kampala University in a planned community",
    amenities: [
      "Ready Title Deeds",
      "50*100 Plot Size",
      "Deposit: Ksh 300,000",
      "Balance in 12 months",
      "1.5 KM from tarmac",
      "University Proximity"
    ]
  },
  {
    id: "6",
    name: "Lucky Gardens",
    location: "Lucky Base Shopping Centre /KAG Kitengela",
    price: "Ksh 1,300,000",
    deposit: "Ksh 300,000",
    image: luckyGardens,
    size: "50*100",
    status: "Hot Deal",
    description: "Prime commercial plots at Lucky Base Shopping Centre with high foot traffic",
    amenities: [
      "Ready Title Deeds",
      "50*100 Plot Size",
      "Deposit: Ksh 300,000",
      "Balance in 3 months",
      "Within Lucky Base Shopping Centre",
      "1 KM from tarmac"
    ]
  },
  {
    id: "7",
    name: "Fahari Gardens Phase 3",
    location: "Kampala University Kitengela",
    price: "Ksh 1,300,000",
    deposit: "Ksh 200,000",
    image: fahariGardens,
    size: "50*100",
    status: "Premium",
    description: "Premium residential plots within KAG Kitengela",
    amenities: [
      "Ready Title Deeds",
      "50*100 Plot Size",
      "Deposit: Ksh 200,000",
      "Balance in 3 months",
      "1 KM from tarmac",
      "University Proximity"
    ]
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-[120px] container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
            <Link to="/properties">
              <Button variant="hero">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Properties
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-[120px]">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link to="/properties">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Properties
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto px-4 pb-12">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
              {property.status}
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {property.name}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">{property.location}</span>
                </div>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Ruler className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Plot Size</p>
                      <p className="font-semibold text-lg">{property.size}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="text-3xl font-bold text-primary">{property.price}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Deposit</p>
                    <p className="text-xl font-semibold text-foreground">{property.deposit}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-accent mb-8">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-medium">High appreciation potential</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features & Amenities</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar - Contact Agent */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
                <p className="text-muted-foreground mb-6">
                  Interested in this property? Get in touch with our agents for more information or to schedule a site visit.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Call Us</p>
                      <p className="font-semibold">+254 7 42498498</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="font-semibold text-sm">info@newcitylands.com</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="accent-red" className="w-full" asChild>
                    <a href="tel:0742498498">Inquire Now</a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://wa.me/254742498498" target="_blank" rel="noopener noreferrer">Schedule Site Visit</a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://wa.me/2547424984984" target="_blank" rel="noopener noreferrer">WhatsApp Agent</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetails;
