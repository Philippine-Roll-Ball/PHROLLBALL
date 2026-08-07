import Image from "next/image";

import {
    Badge,
    Button,
    Container,
    H1,
    Paragraph,
    Section,
} from "@repo/ui-web";

export function RollballHero() {
    return (
        <Section className="py-0">

            <div className="relative overflow-hidden rounded-3xl">

                <div className="relative h-[500px] lg:h-[600px]">

                    <Image
                        src="/images/rollball/hero.jpg"
                        alt="About Roll Ball"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

                    <Container className="relative z-10 flex h-full items-center">

                        <div className="max-w-2xl">

                            <Badge>
                                ABOUT THE SPORT
                            </Badge>

                            <H1 className="mt-6">
                                Speed. Precision. National Pride.
                            </H1>

                            <Paragraph className="mt-6 text-lg">
                                Roll Ball is one of the fastest-growing roller
                                sports in the world, combining speed, teamwork,
                                strategy, and precision into one exciting game.
                            </Paragraph>

                            <div className="mt-10 flex gap-4">

                                <Button>
                                    Learn More
                                </Button>

                                <Button variant="outline">
                                    Watch Highlights
                                </Button>

                            </div>

                        </div>

                    </Container>

                </div>

            </div>

        </Section>
    );
}