import { Footer } from "@/components/landing/Footer";
import { NavbarSection } from "@/components/landing/Navbar";

import { EventsHero } from "@/components/events/hero";
import { UpcomingEventsSection } from "@/components/events/upcoming";
import { PastResultsSection } from "@/components/events/results";
import { GallerySection } from "@/components/events/gallery";

export default function EventsPage() {
  return (
    <>
      <NavbarSection />
      <EventsHero />
        <UpcomingEventsSection />
        <PastResultsSection />
        <GallerySection />
      <Footer />
    </>
  );
}