import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { InquiryFormModal } from "@/components/InquiryFormModal";
import { MapPin, Ruler, TrendingUp, Phone, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import luckyGardens from "@/assets/lucky-gardens.jpg";
import fahariGardens from "@/assets/fahari-gardens.jpg";
import konzaView from "@/assets/konza-view.jpg";
import konza1 from "@/assets/konza-1.jpg";
import konza2 from "@/assets/konza-2.jpg";
import konza3 from "@/assets/konza-3.jpg";
import konza4 from "@/assets/konza-4.jpg";
import konza5 from "@/assets/konza-5.jpg";
import konza6 from "@/assets/konza-6.jpg";
import konza7 from "@/assets/konza-7.jpg";
import konza8 from "@/assets/konza-8.jpg";
import konza9 from "@/assets/konza-9.jpg";
import konza10 from "@/assets/konza-10.jpg";
import kcaPhase2 from "@/assets/kca-phase2.jpg";
import kcaCommercial from "@/assets/kca-phase2-commercial.jpg";
import eserianPlains from "@/assets/eserian-plains.jpg";
import acaciaPhase1 from "@/assets/acacia-phase1.jpg";
import acaciaPhase1 from "@/assets/acacia-phase2.jpg";
import acaciaPhase1 from "@/assets/acacia-phase3.jpg";
import acaciaPhase1 from "@/assets/acacia-phase4.jpg";

import eserian1 from "@/assets/eserian-1.jpg";
import eserian2 from "@/assets/eserian-2.jpg";
import eserian3 from "@/assets/eserian-3.jpg";
import eserian4 from "@/assets/eserian-4.jpg";
import fahariPhase3_1 from "@/assets/fahari-phase3-1.jpg";
import fahariPhase3_2 from "@/assets/fahari-phase3-2.jpg";
import fahariPhase3_3 from "@/assets/fahari-phase3-3.jpg";
import kca1 from "@/assets/kca-1.jpg";
import kca2 from "@/assets/kca-2.jpg";
import kca3 from "@/assets/kca-3.jpg";
import kca4 from "@/assets/kca-4.jpg";
import kca5 from "@/assets/kca-5.jpg";
import kca6 from "@/assets/kca-6.jpg";
import universityViewEntrance1 from "@/assets/university-view-entrance-1.jpg";
import universityViewEntrance2 from "@/assets/university-view-entrance-2.jpg";
import lucky1 from "@/assets/lucky-1.jpg";
import lucky2 from "@/assets/lucky-2.jpg";
import lucky3 from "@/assets/lucky-3.jpg";
import fahariPhase2_1 from "@/assets/fahari-phase2-1.jpg";
import fahariPhase2_2 from "@/assets/fahari-phase2-2.jpg";
import fahariPhase2_3 from "@/assets/fahari-phase2-3.jpg";
import fahariPhase2_4 from "@/assets/fahari-phase2-4.jpg";
import mazola1 from "@/assets/mazola-1.jpg";
import mazola2 from "@/assets/mazola-2.jpg";
import mazola3 from "@/assets/mazola-3.jpg";
import mazola4 from "@/assets/mazola-4.jpg";
import mazola5 from "@/assets/mazola-5.jpg";
import mazola6 from "@/assets/mazola-6.jpg";
import mazola7 from "@/assets/mazola-7.jpg";

const properties = [
  {
    id: "1",
    name: "Eserian Plains",
    location: "KCA University-Kitengela",
    price: "Ksh 350,000",
    deposit: "Ksh 35,000",
    image: eserian1,
    images: [eserian1, eserian2, eserian3, eserian4],
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
    name: "Mazola 5 Milimani (Kitengela)",
    location: "1km Off Namanga Highway",
    price: "Ksh 2,500,000",
    deposit: "10%",
    image: mazola1,
    images: [mazola1, mazola2, mazola3, mazola4, mazola5, mazola6, mazola7],
    size: "40*80",
    status: "Hot Deal",
    description: "Premium residential plots just 1km off Namanga Highway",
    amenities: [
      "Ready Title Deeds",
      "40*80 Plot Size",
      "Deposit: 10%",
      "Balance in 3 months",
      "1km Off Namanga Highway",
      "Excellent Accessibility"
    ]
  },
  {
    id: "3",
    name: "Konza View Phase 2",
    location: "Konza Town",
    price: "Ksh 500,000",
    deposit: "Ksh 150,000",
    image: konza1,
    images: [konza1, konza2, konza3, konza4, konza5, konza6, konza7, konza8, konza9, konza10],
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
    id: "4",
    name: "5 Acre Blocks For Sale (Kitengela)",
    location: "Opposite Kca University Kitengela",
    price: "Ksh 2,000,000",
    deposit: "10%",
    image: kcaPhase2,
    size: "5 Acre",
    status: "Premium",
    description: "Prime 5-acre blocks opposite KCA University with excellent investment potential",
    amenities: [
      "Ready Title Deeds",
      "5 Acre Blocks",
      "Price Per Acre",
      "Deposit: 10%",
      "Balance in 3 months",
      "Opposite KCA University"
    ]
  },
  {
    id: "5",
    name: "University View Estate",
    location: "500 Meters to KCA University Kitengela",
    price: "Ksh 650,000",
    deposit: "Ksh 65,000",
    image: universityViewEntrance1,
    images: [universityViewEntrance1, universityViewEntrance2, kca1, kca2, kca3, kca4, kca5, kca6],
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
    id: "6",
    name: "5 Acre Blocks Opposite Keda Ceramics",
    location: "3km From Umma University Touching Tarmac",
    price: "Ksh 5,500,000",
    deposit: "10%",
    image: kcaCommercial,
    size: "5 Acre",
    status: "Prime Location",
    description: "Exclusive 5-acre blocks touching tarmac, 3km from Umma University",
    amenities: [
      "Ready Title Deeds",
      "5 Acre Blocks",
      "Price Per Acre",
      "Deposit: 10%",
      "Balance in 3 months",
      "Touching Tarmac"
    ]
  },
  {
    id: "7",
    name: "Acacia Phase 1",
    location: "Oloika Acacia-Kitengela",
    price: "Ksh 950,000",
    deposit: "Ksh 200,000",
    image: acaciaPhase1,
    images: [acacia-phase1,acacia-phase2,acacia-phase3,acacia-phase4],
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
    id: "8",
    name: "4.6 Acre Blocks For Sale",
    location: "Touching Tarmac (Kisaju) Opposite Capital Blocks",
    price: "Ksh 12,000,000",
    deposit: "10%",
    image: kcaCommercial,
    size: "5 Acre",
    status: "Prime Location",
    description: "Premium 4.6-acre blocks in Kisaju, touching tarmac opposite Capital Blocks",
    amenities: [
      "Ready Title Deeds",
      "4.6 Acre Blocks",
      "Price Per Acre",
      "Deposit: 10%",
      "Balance in 3 months",
      "Touching Tarmac"
    ]
  },
  {
    id: "9",
    name: "Fahari Gardens Phase 2",
    location: "Kampala University Kitengela",
    price: "Ksh 1,100,000",
    deposit: "Ksh 300,000",
    image: fahariPhase2_1,
    images: [fahariPhase2_1, fahariPhase2_2, fahariPhase2_3, fahariPhase2_4],
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
    id: "10",
    name: "Lucky Gardens",
    location: "Lucky Base Shopping Centre /KAG Kitengela",
    price: "Ksh 1,300,000",
    deposit: "Ksh 300,000",
    image: lucky1,
    images: [lucky1, lucky2, lucky3],
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
    id: "11",
    name: "Fahari Gardens Phase 3",
    location: "Within KAG University",
    price: "Ksh 1,300,000",
    deposit: "Ksh 200,000",
    image: fahariPhase3_1,
    images: [fahariPhase3_1, fahariPhase3_2, fahariPhase3_3],
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

        {/* Hero Image/Carousel */}
        <div className="container mx-auto px-4 pb-12">
          {property.images && property.images.length > 1 ? (
            <Carousel className="w-full">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
                <CarouselContent>
                  {property.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-[500px]">
                        <img
                          src={img}
                          alt={`${property.name} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg z-10">
                  {property.status}
                </div>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </div>
            </Carousel>
          ) : (
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
          )}
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
                      <p className="font-semibold">+254742 498 498</p>
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
                  <InquiryFormModal 
                    propertyName={property.name}
                    propertyId={property.id}
                  />
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:0742498498">Call Agent</a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://wa.me/254742498498" target="_blank" rel="noopener noreferrer">WhatsApp Agent</a>
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
