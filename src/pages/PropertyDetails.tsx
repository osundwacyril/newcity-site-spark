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

const properties = [
  {
    id: "1",
    name: "Lucky Gardens",
    location: "Lucky Base Shopping Centre, KAG",
    price: "Ksh 1,300,000",
    deposit: "Ksh 100,000",
    image: luckyGardens,
    size: "50x100",
    status: "Available",
    description: "Prime commercial plots strategically located at Lucky Base Shopping Centre along Kitengela-Athi River Road. These plots offer exceptional business opportunities with high foot traffic and excellent visibility.",
    amenities: [
      "Ready Title Deeds",
      "Electricity Available",
      "Water Connection",
      "Tarmac Road Access",
      "Shopping Centre Proximity",
      "High Foot Traffic Area"
    ],
    nearbyInfrastructure: [
      "Lucky Base Shopping Centre - Adjacent",
      "KAG Church - 100m",
      "Kitengela Town - 3km",
      "Athi River - 8km",
      "Nairobi CBD - 35km"
    ]
  },
  {
    id: "2",
    name: "Fahari Gardens Phase 2",
    location: "Kampala University, KAG Kitengela",
    price: "Ksh 1,100,000",
    deposit: "Ksh 100,000",
    image: fahariGardens,
    size: "50x100",
    status: "Available",
    description: "Beautiful residential plots located 1.5KM off tarmac near Kampala University. Perfect for building your dream home in a serene, planned community with flexible payment terms.",
    amenities: [
      "Ready Title Deeds",
      "12 Months Balance Payment",
      "Planned Community",
      "Access Roads",
      "University Proximity",
      "Secure Neighborhood"
    ],
    nearbyInfrastructure: [
      "Kampala University - 500m",
      "KAG Church - 1km",
      "Tarmac Road - 1.5km",
      "Kitengela Town - 5km",
      "Schools & Hospitals - 2km"
    ]
  },
  {
    id: "3",
    name: "Konza View Phase 2",
    location: "Konza, Kenya",
    price: "Ksh 500,000",
    deposit: "Ksh 100,000",
    image: konzaView,
    size: "50x100",
    status: "Hot Deal",
    description: "Affordable residential plots with stunning views of the Konza Technopolis. Your power to build starts with land - invest in the future tech city of Kenya with ready title deeds.",
    amenities: [
      "Ready Title Deeds",
      "Affordable Pricing",
      "Konza Technopolis Views",
      "Planned Layout",
      "Access Roads",
      "Investment Opportunity"
    ],
    nearbyInfrastructure: [
      "Konza Technopolis - 5km",
      "Nairobi-Mombasa Highway - 3km",
      "Machakos Town - 15km",
      "SGR Station - 10km",
      "Upcoming Commercial Centers"
    ]
  },
  {
    id: "4",
    name: "KCA Phase 2",
    location: "KCA University, Kitengela",
    price: "Ksh 950,000",
    deposit: "Ksh 100,000",
    image: kcaPhase2,
    size: "50x100",
    status: "Available",
    description: "Prime residential plots near KCA University offering excellent investment potential in a rapidly developing area with strong rental demand from students and staff.",
    amenities: [
      "Ready Title Deeds",
      "University Proximity",
      "High Rental Demand",
      "Developed Area",
      "Good Road Network",
      "Security"
    ],
    nearbyInfrastructure: [
      "KCA University - Adjacent",
      "Kitengela Town - 4km",
      "Shopping Centers - 1km",
      "Public Transport - 500m",
      "Schools - 2km"
    ]
  },
  {
    id: "5",
    name: "KCA Phase 2 Commercial",
    location: "KCA University, Kitengela",
    price: "Ksh 1,500,000",
    deposit: "Ksh 150,000",
    image: kcaCommercial,
    size: "50x100",
    status: "Prime Location",
    description: "Exceptional commercial plots strategically positioned near KCA University. Perfect for retail, offices, or rental apartments with guaranteed returns from the university community.",
    amenities: [
      "Ready Title Deeds",
      "Commercial Zoning",
      "High Traffic Location",
      "University Market",
      "Utilities Available",
      "Investment Grade"
    ],
    nearbyInfrastructure: [
      "KCA University - 200m",
      "Main Road Access - Adjacent",
      "Student Hostels - 500m",
      "Banks & ATMs - 1km",
      "Public Transport Hub - 300m"
    ]
  },
  {
    id: "6",
    name: "Eserian Plains",
    location: "Kajiado County",
    price: "Ksh 750,000",
    deposit: "Ksh 100,000",
    image: eserianPlains,
    size: "50x100",
    status: "New Listing",
    description: "Serene residential plots in the beautiful Eserian Plains of Kajiado County. Enjoy wide open spaces, fresh air, and the perfect setting for your dream home away from city noise.",
    amenities: [
      "Ready Title Deeds",
      "Spacious Plots",
      "Scenic Environment",
      "Clean Air",
      "Planned Development",
      "Affordable"
    ],
    nearbyInfrastructure: [
      "Kajiado Town - 12km",
      "Namanga Road - 8km",
      "Schools - 5km",
      "Health Centers - 6km",
      "Nairobi - 45km"
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

              {/* Nearby Infrastructure */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Nearby Infrastructure</h2>
                <div className="space-y-3">
                  {property.nearbyInfrastructure.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary transition-colors"
                    >
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
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
                  <Button variant="hero" className="w-full" asChild>
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
