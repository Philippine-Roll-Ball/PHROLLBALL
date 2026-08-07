import {
  Container,
  H2,
  Paragraph,
  Section,
} from "@repo/ui-web";

import { NewsFeatured } from "./NewsFeatured";
import { NewsItem } from "./NewsItem";

export function NewsSection() {
  return (
    <Section id="news">
      <Container>

        <div className="mb-12 text-center">

          <H2>
            Latest News & Updates
          </H2>

          <Paragraph className="mt-4">
            Stay updated with the latest tournaments,
            announcements, and achievements of PRBA.
          </Paragraph>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <NewsFeatured
  image="/images/news/news1.jpg"
  category="Official Announcement"
  title="Dr. Julius Sison Appointed as PRBA's First Secretary-General"
  description="The Philippine Roll Ball Association (PRBA) officially announces the appointment and election of Dr. Julius Sison as its first Secretary-General, marking a significant milestone in strengthening the Association's leadership and governance."
  href="/news/dr-julius-sison-secretary-general"
/>

          </div>

          <div className="space-y-6">

            <NewsItem
              category="Training"
              title="National Training Camp Opens Next Month"
              href="/news/training-camp"
            />

            <NewsItem
              category="Announcement"
              title="PRBA Releases 2026 Tournament Calendar"
              href="/news/tournament-calendar"
            />

          </div>

        </div>

      </Container>
    </Section>
  );
}