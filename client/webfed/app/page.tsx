import { NavbarSection } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/Hero";
import { AboutSection } from "@/components/landing/About";
import { CountdownSection } from "@/components/landing/Countdown/CountdownSection";
import { NewsSection } from "@/components/landing/News";
import { LeaguesSection } from "@/components/landing/League";
import { NationalTeamSection } from "@/components/landing/Team";
import { PartnersSection } from "@/components/landing/Partners";
import { LeadershipSection } from "@/components/landing/Leadership";
import { ContactSection } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <CountdownSection />
      <AboutSection />
      <LeaguesSection />
      <NewsSection />
      <NationalTeamSection />
      <PartnersSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </>
  );
}