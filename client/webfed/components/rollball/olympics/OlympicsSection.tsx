import Image from "next/image";

import {
    Badge,
    Card,
    CardContent,
    Container,
    H2,
    Paragraph,
    Section,
} from "@repo/ui-web";

import { statisticsData } from "@/data/rollball/statistics";

import { StatisticCard } from "./StatisticCard";

export function OlympicsSection() {
    return (
        <Section>

            <Container>

                <Card>

                    <CardContent className="grid gap-10 p-10 lg:grid-cols-2">

                        <div>

                            <Badge>
                                THE GLOBAL VISION
                            </Badge>

                            <H2 className="mt-6">
                                Road to the Olympics
                            </H2>

                            <Paragraph className="mt-6">
                                Roll Ball continues to grow around the world,
                                with more national federations participating
                                in international competitions and working
                                toward future Olympic recognition.
                            </Paragraph>

                            <div className="mt-10 flex gap-10">

                                {statisticsData.map((statistic) => (

                                    <StatisticCard
                                        key={statistic.id}
                                        statistic={statistic}
                                    />

                                ))}

                            </div>

                        </div>

                        <div className="relative h-[350px] overflow-hidden rounded-2xl">

                            <Image
                                src="/images/rollball/olympics.jpg"
                                alt="Road to the Olympics"
                                fill
                                className="object-cover"
                            />

                        </div>

                    </CardContent>

                </Card>

            </Container>

        </Section>
    );
}