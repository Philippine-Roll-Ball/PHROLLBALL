import {
  Container,
  H2,
  Paragraph,
  Section,
} from "@repo/ui-web";

import { OfficerCard } from "./OfficerCard";

export function LeadershipSection() {
  return (
    <Section className="bg-muted/30">

      <Container>

        <div className="mb-14 text-center">

          <H2>
            Leadership & Governance
          </H2>

          <Paragraph className="mx-auto mt-4 max-w-3xl">
            Meet the dedicated leaders committed to developing,
            promoting, and strengthening Roll Ball throughout
            the Philippines.
          </Paragraph>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          <OfficerCard
           image="/images/officers/Press.jpg"
            name="Antonio T. Ortega"
            position="President"
          />

          <OfficerCard
            image="/images/officers/julius.jpg"
            name="Dr. Julius Sison"
            position="Secretary General"
          />

          <OfficerCard
            image="/images/officers/katy.jpg"
            name="Katy Chenee Napao"
            position="Secretary Board of Trustee"
          />

          <OfficerCard
            image="/images/officers/coach.jpg"
            name="Roy Deliarte"
            position="Treasurer"
          />
          <OfficerCard
            image="/images/officers/clyde.jpg"
            name="Dexter Clyde Arcosa"
            position="Head Marketing"
          />
          <OfficerCard
            image="/images/officers/jireh.jpg"
            name="Praise El-jireh Cajes"
            position="National Head Coach"
          />
          <OfficerCard
            image="/images/officers/coach.jpg"
            name="Praise El-jireh Cajes"
            position="National Head Coach"
          />
          <OfficerCard
            image="/images/officers/coach.jpg"
            name="Praise El-jireh Cajes"
            position="National Head Coach"
          />
          <OfficerCard
            image="/images/officers/coach.jpg"
            name="Praise El-jireh Cajes"
            position="National Head Coach"
          />

        </div>

      </Container>

    </Section>
  );
}