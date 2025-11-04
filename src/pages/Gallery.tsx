import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { X } from "lucide-react";
import constructionSite1 from "@/assets/gallery/construction-site-1.jpg";
import constructionSite2 from "@/assets/gallery/construction-site-2.jpg";
import plotMarker from "@/assets/gallery/plot-marker.jpg";
import propertyFence from "@/assets/gallery/property-fence.jpg";
import landDevelopment from "@/assets/gallery/land-development.jpg";
import modernVilla from "@/assets/gallery/modern-villa.jpg";
import accessRoad from "@/assets/gallery/access-road.jpg";
import greenLand from "@/assets/gallery/green-land.jpg";
import houseConstruction from "@/assets/gallery/house-construction.jpg";
import buildingDevelopment from "@/assets/gallery/building-development.jpg";

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
