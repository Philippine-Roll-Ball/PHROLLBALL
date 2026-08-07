
import { Footer } from "@/components/landing/Footer";
import { JoinHero } from "@/components/join/hero";
import { NavbarSection } from "@/components/landing/Navbar";
import { RegistrationSection } from "@/components/join/registration";
import { ClubsSection } from "@/components/join/clubs";

export default function JoinPage() {
  return (
    <>
      <NavbarSection />
        <JoinHero />
        <RegistrationSection />
        <ClubsSection />
      <Footer />
    </>
  );
}