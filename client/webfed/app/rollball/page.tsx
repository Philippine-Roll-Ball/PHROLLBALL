import { Footer } from "@/components/landing/Footer";
import { NavbarSection } from "@/components/landing/Navbar";
import { FundamentalsSection } from "@/components/rollball/fundamentals";

import { RollballHero } from "@/components/rollball/hero";
import { HistorySection } from "@/components/rollball/history";
import { OlympicsSection } from "@/components/rollball/olympics";


export default function RollballPage() {
    return (
        <>
       
            <NavbarSection />
            <RollballHero />
            <FundamentalsSection />
            <OlympicsSection />
            <HistorySection />
            <Footer />
        </>
    );
}