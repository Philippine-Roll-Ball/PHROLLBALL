import {
    Container,
    H2,
    Section,
} from "@repo/ui-web";

import { fundamentalsData } from "@/data/rollball/fundamentals";

import { CourtCard } from "./CourtCard";
import { FundamentalCard } from "./FundamentalCard";
import { SkatingCard } from "./SkatingCard";

export function FundamentalsSection() {
    return (
        <Section>

            <Container>

                <div className="mb-16 text-center">

                    <H2>
                        The Fundamentals
                    </H2>

                </div>

                <div className="grid gap-6">

                    <div className="grid gap-6 md:grid-cols-3">

                        {fundamentalsData.map((item) => (
                            <FundamentalCard
                                key={item.id}
                                item={item}
                            />
                        ))}

                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">

                        <div className="lg:col-span-2">

                            <CourtCard />

                        </div>

                        <SkatingCard />

                    </div>

                </div>

            </Container>

        </Section>
    );
}