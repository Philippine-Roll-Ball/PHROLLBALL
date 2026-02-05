import { AboutSection } from "@/components/AboutSection"
import { HeaderSection } from "@/components/HeaderSection"
import { HeroSection } from "@/components/HeroSection"

const index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
    </div>
   
  )
}

export default index