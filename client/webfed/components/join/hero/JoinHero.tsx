import Image from "next/image";
import Link from "next/link";

import {
  Button,
  Container,
  H1,
  Paragraph,
  Section,
} from "@repo/ui-web";

export function JoinHero() {
  return (
    <Section className="py-0">

      <div className="relative overflow-hidden rounded-3xl">

        <div className="relative h-[500px] lg:h-[600px]">

          <Image
            src="/images/team1.jpeg"
            alt="Join Philippine Roll Ball Association"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />

          <Container className="relative z-10 flex h-full items-center">

            <div className="max-w-2xl text-white">

              <H1 className="text-white">
                Forge Your Legacy in Philippine Roll Ball
              </H1>

              <Paragraph className="mt-6 text-lg text-white/90">
                Join the fastest-growing Roll Ball community in the Philippines.
                Train with certified clubs, compete in official tournaments,
                and become part of the Philippine Roll Ball Association.
              </Paragraph>

              <div className="mt-10 flex flex-wrap gap-4">

                <Button size="lg">
                  Become a Member
                </Button>

                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white bg-white/10 text-white hover:bg-white hover:text-primary"
                  >
                    Learn More
                  </Button>
                </Link>

              </div>

            </div>

          </Container>

        </div>

      </div>

    </Section>
  );
}