import {
  Button,
  Container,
  H2,
  Paragraph,
  Section,
} from "@repo/ui-web";

import { ClubCard } from "./ClubCard";
import { ClubMap } from "./ClubMap";

export function ClubsSection() {
  return (
    <Section>

      <Container>

        <div className="mb-10 text-center">

          <H2>
            Find Your Tribe
          </H2>

          <Paragraph className="mt-4">
            Connect with local clubs and find the perfect training ground near you.
          </Paragraph>

        </div>

        <div className="grid gap-8 lg:grid-cols-12">

          <div className="lg:col-span-8">
            <ClubMap />
          </div>
          <div className="space-y-6 lg:col-span-4">

            <ClubCard
              featured
              name="Manila Speedsters"
              location="Rizal Memorial Stadium"
              members={45}
              schedule="Wed / Fri"
            />

            <ClubCard
              name="Quezon Rollers"
              location="Quezon City"
              members={32}
              schedule="Sat / Sun"
            />

            <ClubCard
              name="Cebu Spinners"
              location="Cebu City"
              members={28}
              schedule="Tue / Thu"
            />

            <Button className="w-full">
              View All Clubs
            </Button>

          </div>

        </div>

      </Container>

    </Section>
  );
}