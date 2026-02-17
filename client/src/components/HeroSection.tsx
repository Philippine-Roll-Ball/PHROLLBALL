import { Button } from "@/components/ui/button";
import { Play, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg1 from "@/assets/herobg.jpg";
import heroBg2 from "@/assets/herobg2.jpg";
import { useToast } from "@/hook/use-toast";

const slides = [
  {
    title: "PHILIPPINE",
    subtitle: "ROLLBALL",
    tagline: "FEDERATION",
    description: "Experience the thrill of rollball – where speed, skill, and teamwork meet on wheels. Join the fastest growing sport in the Philippines.",
    badge: "National Federation Est. 2018",
    image: heroBg,
  },
  {
    title: "JOIN THE",
    subtitle: "MOVEMENT",
    tagline: "TODAY",
    description: "Be part of over 500 active players across 17 regions. Train with the best coaches and compete in national tournaments.",
    badge: "50+ Events Yearly",
    image: heroBg1,
  },
  {
    title: "COMPETE",
    subtitle: "EXCEL",
    tagline: "CHAMPION",
    description: "From grassroots to elite level competition. Represent the Philippines in international rollball championships.",
    badge: "International Recognition",
    image: heroBg2,
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
 const { toast } = useToast();
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-[80vh] pt-20 md:pt-21 flex items-center overflow-hidden"
    >
  

      {/* Background Images with Transition */}
      {slides.map((s, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url(${s.image})`,
             backgroundPosition: "center top",
            opacity: currentSlide === index ? 1 : 0,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-foreground/40" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            {/* Badge */}
            <div
              key={`badge-${currentSlide}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 backdrop-blur-md border border-accent/30 animate-fade-in"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-accent">
                {slide.badge}
              </span>
            </div>

            {/* Main Heading */}
            <div key={`heading-${currentSlide}`} className="animate-fade-in">
              <h1 className="font-display leading-[0.9] tracking-tight">
                <span className="block text-4xl sm:text-5xl md:text-6xl text-primary-foreground">
                  {slide.title}
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl text-gradient-gold">
                  {slide.subtitle}
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl text-primary-foreground/60 mt-2">
                  {slide.tagline}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              key={`desc-${currentSlide}`}
              className="text-sm md:text-base text-primary-foreground/70 max-w-md leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap items-center gap-3 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Button
                size="default"
                className="gradient-gold text-accent-foreground font-bold px-6 py-5 shadow-gold hover:opacity-90 transition-all hover:scale-105 rounded-full"
              >
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                size="default"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-6 py-5 rounded-full backdrop-blur-sm"
              >
                <Play className="mr-1 h-4 w-4" />
                Watch Video
              </Button>
              
            </div>

            {/* Stats - Always Visible */}
            <div className="flex items-center gap-6 pt-4 border-t border-primary-foreground/20">
              <div>
                <div className="font-display text-3xl md:text-4xl text-accent">500+</div>
                <div className="text-primary-foreground/60 text-xs uppercase tracking-wider">Players</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl text-accent">17</div>
                <div className="text-primary-foreground/60 text-xs uppercase tracking-wider">Regions</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl text-accent">50+</div>
                <div className="text-primary-foreground/60 text-xs uppercase tracking-wider">Events</div>
              </div>
            </div>

            {/* Carousel Indicators & Navigation */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      currentSlide === index
                        ? "w-8 bg-accent"
                        : "w-3 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronRight className="h-4 w-4 rotate-180" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
