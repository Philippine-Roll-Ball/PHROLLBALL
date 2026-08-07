import Image from "next/image";

import {
  Badge,
  Button,
  Container,
  H1,
  Paragraph,
  Section,
} from "@repo/ui-web";

export function EventsHero() {
  return (
    <Section className="relative overflow-hidden py-0">

      <div className="relative h-[500px]">

        <Image
          src="/images/events/events-hero.jpg"
          alt="PRBA Championship Calendar"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <Container className="relative z-10 flex h-full items-center">

          <div className="max-w-2xl">

            <Badge variant="secondary">
              Season 2026
            </Badge>

            <H1 className="mt-6 text-white">
              Championship Calendar
            </H1>

            <Paragraph className="mt-6 text-lg text-white/90">
              Experience the speed, precision, and national pride of
              Philippine Roll Ball. Join this year's premier
              tournaments held across the country.
            </Paragraph>

            <div className="mt-8 flex flex-wrap gap-4">

              <Button>
                View Upcoming Events
              </Button>

              <Button className="text-white border border-white" variant="outline">
                Tournament Guide
              </Button>

            </div>

          </div>

        </Container>

      </div>

    </Section>
  );
}