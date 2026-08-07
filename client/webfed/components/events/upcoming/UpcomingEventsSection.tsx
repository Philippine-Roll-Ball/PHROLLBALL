import {
  Button,
  Container,
  H2,
  Paragraph,
  Section,
} from "@repo/ui-web";

import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  Users,
  Shield,
} from "lucide-react";

import { EventCard } from "./EventCard";
import { FeaturedEventCard } from "./FeaturedEventCard";
import { MiniEventCard } from "./MiniEventCard";

export function UpcomingEventsSection() {
  return (
    <Section>

      <Container>

        <div className="mb-10 flex items-end justify-between">

          <div>

            <H2>
              Upcoming Events
            </H2>

            <Paragraph className="mt-2">
              The road to the Federation Cup starts here.
            </Paragraph>

          </div>

          <div className="hidden gap-3 md:flex">

            <Button variant="outline" size="icon">
              <ChevronLeft size={18} />
            </Button>

            <Button variant="outline" size="icon">
              <ChevronRight size={18} />
            </Button>

          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-12">

          <div className="lg:col-span-8">

            <FeaturedEventCard
              image="/images/events/manila.jpg"
              category="Premier League"
              title="Manila Grand Invitational 2026"
              description="The country's biggest Roll Ball tournament featuring the nation's best teams."
              date="October 15–20, 2026"
              location="Rizal Memorial Coliseum"
            />

          </div>

          <div className="lg:col-span-4">

            <EventCard
              image="/images/events/visayas.jpg"
              category="Regional"
              title="Visayas Qualifier"
              description="Regional selection tournament for the national championship."
              date="November 4, 2026"
              location="Cebu City"
            />

          </div>

        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <MiniEventCard
            icon={<Users className="text-primary" />}
            title="U19 Junior Nationals"
            description="Developing the next generation of athletes."
            date="December 12–14"
          />

          <MiniEventCard
            icon={<Shield className="text-secondary" />}
            title="Referee Certification"
            description="Technical seminar for federation officials."
            date="January 5"
          />

          <MiniEventCard
            icon={<Trophy className="text-primary" />}
            title="Mindanao Open"
            description="Premier competition in Southern Philippines."
            date="February 18"
          />

        </div>

      </Container>

    </Section>
  );
}