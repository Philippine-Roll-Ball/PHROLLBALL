import { AboutSection } from "@/components/AboutSection"
import { HeaderSection } from "@/components/HeaderSection"
import { HeroSection } from "@/components/HeroSection"
import { EventsSection } from "@/components/EventSection"
import { Footer } from "@/components/Footer"
import { NewsSection } from "@/components/NewSection"
import { GallerySection } from "@/components/GallerySection"
const index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <NewsSection />
      <GallerySection />
      <Footer />
    </div>
   
  )
}

export default index