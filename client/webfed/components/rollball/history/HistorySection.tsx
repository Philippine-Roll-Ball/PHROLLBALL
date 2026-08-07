import {
    Container,
    H2,
    Paragraph,
    Section,
} from "@repo/ui-web";

import { historyData } from "@/data/rollball/history";

import { HistoryTimelineItem } from "./HistoryTimelineItem";

export function HistorySection() {
    return (
        <Section>

            <Container>

                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <H2>
                        History in the Philippines
                    </H2>

                    <Paragraph className="mt-4">
                        Follow the journey of Roll Ball from its humble
                        beginnings to becoming one of the country's
                        fastest-growing sports.
                    </Paragraph>

                </div>

                <div className="relative">

                    {/* Timeline */}

                    <div
                        className="
                            absolute
                            left-1/2
                            top-0
                            hidden
                            h-full
                            w-1
                            -translate-x-1/2
                            rounded-full
                            bg-border
                            lg:block
                        "
                    />

                    <div className="space-y-24">

                        {historyData.map((item, index) => (

                            <HistoryTimelineItem
                                key={item.id}
                                item={item}
                                reverse={index % 2 === 1}
                            />

                        ))}

                    </div>

                </div>

            </Container>

        </Section>
    );
}