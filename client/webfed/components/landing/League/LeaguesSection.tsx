import {
  Container,
  H2,
  Paragraph,
  Section,
} from "@repo/ui-web";

import { LeagueCard } from "./LeagueCard";

export function LeaguesSection() {
  return (
    <Section id="leagues" className="bg-muted/30">

      <Container>

        <div className="mb-14 text-center">

          <H2>
            Competitive Leagues
          </H2>

          <Paragraph className="mx-auto mt-4 max-w-2xl">
            Nurturing athletes from grassroots development
            to international competition through structured
            leagues and tournaments.
          </Paragraph>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          <LeagueCard
            title="National Premier League"
            description="The country's highest level of Roll Ball competition featuring the best clubs and athletes."
            href="/leagues/premier"
            accentColor="bg-primary"
          />

          <LeagueCard
            title="Collegiate Series"
            description="Developing the next generation of players through inter-school and university competitions."
            href="/leagues/collegiate"
            accentColor="bg-secondary"
          />

          <LeagueCard
            title="Grassroots Development"
            description="Community-based programs designed to introduce Roll Ball to young athletes across the Philippines."
            href="/leagues/grassroots"
            accentColor="bg-yellow-500"
          />

        </div>

      </Container>

    </Section>
  );
}