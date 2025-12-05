import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { X } from "lucide-react";
import constructionSite1 from "@/assets/gallery/construction-site-1.jpg?format=webp&w=800&imagetools";
import constructionSite2 from "@/assets/gallery/construction-site-2.jpg?format=webp&w=800&imagetools";
import plotMarker from "@/assets/gallery/plot-marker.jpg?format=webp&w=800&imagetools";
import propertyFence from "@/assets/gallery/property-fence.jpg?format=webp&w=800&imagetools";
import landDevelopment from "@/assets/gallery/land-development.jpg?format=webp&w=800&imagetools";
import modernVilla from "@/assets/gallery/modern-villa.jpg?format=webp&w=800&imagetools";
import accessRoad from "@/assets/gallery/access-road.jpg?format=webp&w=800&imagetools";
import greenLand from "@/assets/gallery/green-land.jpg?format=webp&w=800&imagetools";
import houseConstruction from "@/assets/gallery/house-construction.jpg?format=webp&w=800&imagetools";
import buildingDevelopment from "@/assets/gallery/building-development.jpg?format=webp&w=800&imagetools";
import team1 from  "@/assets/gallery/team1.jpg?format=webp&w=800&imagetools";
import team2 from  "@/assets/gallery/team2.jpg?format=webp&w=800&imagetools";
import team3 from  "@/assets/gallery/team3.jpg?format=webp&w=800&imagetools";
import team4 from  "@/assets/gallery/team4.jpg?format=webp&w=800&imagetools";
import team5 from  "@/assets/gallery/team5.jpg?format=webp&w=800&imagetools";
import team6 from  "@/assets/gallery/team6.jpg?format=webp&w=800&imagetools";
import team7 from  "@/assets/gallery/team7.jpg?format=webp&w=800&imagetools";
import team8 from  "@/assets/gallery/team8.jpg?format=webp&w=800&imagetools";
import team9 from  "@/assets/gallery/team9.jpg?format=webp&w=800&imagetools";
import team10 from  "@/assets/gallery/team10.jpg?format=webp&w=800&imagetools";
import team11 from  "@/assets/gallery/team11.jpg?format=webp&w=800&imagetools";
import team12 from  "@/assets/gallery/team12.jpg?format=webp&w=800&imagetools";
import team13 from  "@/assets/gallery/team13.jpg?format=webp&w=800&imagetools";
import team14 from  "@/assets/gallery/team14.jpg?format=webp&w=800&imagetools";
import team15 from  "@/assets/gallery/team15.jpg?format=webp&w=800&imagetools";
import team16 from  "@/assets/gallery/team16.jpg?format=webp&w=800&imagetools";
import team17 from  "@/assets/gallery/team17.jpg?format=webp&w=800&imagetools";
import team18 from  "@/assets/gallery/team18.jpg?format=webp&w=800&imagetools";
import team19 from  "@/assets/gallery/team19.jpg?format=webp&w=800&imagetools";
import team20 from  "@/assets/gallery/team20.jpg?format=webp&w=800&imagetools";
import team21 from  "@/assets/gallery/team21.jpg?format=webp&w=800&imagetools";
import team22 from  "@/assets/gallery/team22.jpg?format=webp&w=800&imagetools";
import team23 from  "@/assets/gallery/team23.jpg?format=webp&w=800&imagetools";
import team24 from  "@/assets/gallery/team24.jpg?format=webp&w=800&imagetools";
import team25 from  "@/assets/gallery/team25.jpg?format=webp&w=800&imagetools";
import team26 from  "@/assets/gallery/team26.jpg?format=webp&w=800&imagetools";
import team27 from  "@/assets/gallery/team27.jpg?format=webp&w=800&imagetools";
import team28 from  "@/assets/gallery/team28.jpg?format=webp&w=800&imagetools";
import team29 from  "@/assets/gallery/team29.jpg?format=webp&w=800&imagetools";
import team30 from  "@/assets/gallery/team30.jpg?format=webp&w=800&imagetools";
import team31 from  "@/assets/gallery/team31.jpg?format=webp&w=800&imagetools";
import team32 from  "@/assets/gallery/team32.jpg?format=webp&w=800&imagetools";
import team33 from  "@/assets/gallery/team33.jpg?format=webp&w=800&imagetools";
import team34 from  "@/assets/gallery/team34.jpg?format=webp&w=800&imagetools";
import team35 from  "@/assets/gallery/team35.jpg?format=webp&w=800&imagetools";
import team36 from  "@/assets/gallery/team36.jpg?format=webp&w=800&imagetools";




const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: constructionSite1, alt: "Construction site development", category: "Construction" },
    { src: constructionSite2, alt: "Multi-story building under construction", category: "Construction" },
    { src: plotMarker, alt: "Property plot marker", category: "Land" },
    { src: propertyFence, alt: "Luxury property behind fence", category: "Completed" },
    { src: landDevelopment, alt: "Land development with trees", category: "Land" },
    { src: modernVilla, alt: "Modern villa property", category: "Completed" },
    { src: accessRoad, alt: "Property access road", category: "Infrastructure" },
    { src: greenLand, alt: "Green land with development", category: "Land" },
    { src: houseConstruction, alt: "House under construction", category: "Construction" },
    { src: buildingDevelopment, alt: "Building development project", category: "Construction" },
    { src: team1, alt: "  Newcity Team activity", category: "team activity" },
    { src: team2, alt: "  Newcity Team activity", category: "team activity" },
    { src: team3, alt: "  Newcity Team activity", category: "team activity" },
    { src: team4, alt: "  Newcity Team activity", category: "team activity" },
    { src: team5, alt: "  Newcity Team activity", category: "team activity" },
    { src: team6, alt: "  Newcity Team activity", category: "team activity" },
    { src: team7, alt: "  Newcity Team activity", category: "team activity" },
    { src: team8, alt: "  Newcity Team activity", category: "team activity" },
    { src: team9, alt: "  Newcity Team activity", category: "team activity" },
    { src: team10, alt: "  Newcity Team activity", category: "team activity" },
    { src: team11, alt: "  Newcity Team activity", category: "team activity" },
    { src: team12, alt: "  Newcity Team activity", category: "team activity" },
    { src: team13, alt: "  Newcity Team activity", category: "team activity" },
    { src: team14, alt: "  Newcity Team activity", category: "team activity" },
    { src: team15, alt: "  Newcity Team activity", category: "team activity" },
    { src: team16, alt: "  Newcity Team activity", category: "team activity" },
    { src: team17, alt: "  Newcity Team activity", category: "team activity" },
    { src: team18, alt: "  Newcity Team activity", category: "team activity" },
    { src: team19, alt: "  Newcity Team activity", category: "team activity" },
    { src: team20, alt: "  Newcity Team activity", category: "team activity" },
    { src: team21, alt: "  Newcity Team activity", category: "team activity" },
    { src: team22, alt: "  Newcity Team activity", category: "team activity" },
    { src: team23, alt: "  Newcity Team activity", category: "team activity" },
    { src: team24, alt: "  Newcity Team activity", category: "team activity" },
    { src: team25, alt: "  Newcity Team activity", category: "team activity" },
    { src: team26, alt: "  Newcity Team activity", category: "team activity" },
    { src: team27, alt: "  Newcity Team activity", category: "team activity" },
    { src: team28, alt: "  Newcity Team activity", category: "team activity" },
    { src: team29, alt: "  Newcity Team activity", category: "team activity" },
    { src: team30, alt: "  Newcity Team activity", category: "team activity" },
    { src: team31, alt: "  Newcity Team activity", category: "team activity" },
    { src: team32, alt: "  Newcity Team activity", category: "team activity" },
    { src: team33, alt: "  Newcity Team activity", category: "team activity" },
    { src: team34, alt: "  Newcity Team activity", category: "team activity" },
    { src: team35, alt: "  Newcity Team activity", category: "team activity" },
    { src: team36, alt: "  Newcity Team activity", category: "team activity" },
    
    


    
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-red bg-clip-text text-transparent">
              Property Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of completed projects, ongoing developments, and available land parcels
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 bg-primary/80 rounded-full text-xs font-semibold mb-2">
                      {image.category}
                    </div>
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent-red transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
