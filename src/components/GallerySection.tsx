import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "National Championship 2025",
    category: "Championship",
  },
  {
    id: 2,
    title: "Youth Training Camp",
    category: "Training",
  },
  {
    id: 3,
    title: "Visayas Regional Finals",
    category: "Regional",
  },
  {
    id: 4,
    title: "Team Philippines",
    category: "National Team",
  },
  {
    id: 5,
    title: "Awards Ceremony",
    category: "Events",
  },
  {
    id: 6,
    title: "Community Outreach",
    category: "Community",
  },
];

const categories = ["All", "Championship", "Training", "Regional", "National Team", "Events", "Community"];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold mb-4">
            Photo Gallery
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            CAPTURING <span className="text-gradient-gold">MOMENTS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Relive the excitement and passion of Philippine Rollball through our collection of memorable moments
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "gradient-blue text-primary-foreground shadow-primary-glow"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Placeholder with gradient - would be replaced with actual images */}
              <div className={`absolute inset-0 ${
                index % 3 === 0 ? "gradient-hero" : 
                index % 3 === 1 ? "gradient-blue" : 
                "bg-secondary"
              }`} />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                  <h4 className="font-display text-xl text-primary-foreground mb-1">{image.title}</h4>
                  <span className="text-sm text-primary-foreground/80">{image.category}</span>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-1 bg-accent rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-primary-foreground hover:text-accent transition-colors"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 p-2 text-primary-foreground hover:text-accent transition-colors"
            >
              <ChevronLeft size={48} />
            </button>

            <div className="max-w-4xl w-full aspect-video rounded-xl overflow-hidden">
              <div className="w-full h-full gradient-hero flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <h3 className="font-display text-3xl mb-2">{filteredImages[currentImage]?.title}</h3>
                  <p className="opacity-80">{filteredImages[currentImage]?.category}</p>
                </div>
              </div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 p-2 text-primary-foreground hover:text-accent transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            {/* Thumbnails */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {filteredImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImage === index ? "bg-accent w-6" : "bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
