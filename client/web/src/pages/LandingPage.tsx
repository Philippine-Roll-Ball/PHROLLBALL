import { AboutSection } from "@/components/landing/AboutSection"
import { HeaderSection } from "@/components/landing/HeaderSection"
import { HeroSection } from "@/components/landing/HeroSection"
import { Footer } from "@/components/landing/Footer"
import { NewsSection } from "@/components/landing/NewSection"
import { GallerySection } from "@/components/landing/GallerySection"
const index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <GallerySection />
      <Footer />
    </div>
   
  )
}

export default index