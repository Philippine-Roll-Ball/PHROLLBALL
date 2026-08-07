import {
  Container,
  H2,
  Paragraph,
  Section,
} from "@repo/ui-web";

import { ResultFilter } from "./ResultFilter";
import { ResultsTable } from "./ResultsTable";

export function PastResultsSection() {
  return (
    <Section>

      <Container>

        <div className="grid gap-10 lg:grid-cols-12">

          <div className="lg:col-span-4">

            <H2>
              Past Results
            </H2>

            <Paragraph className="mt-4 mb-8">
              Historical tournament champions,
              statistics, and match results.
            </Paragraph>

            <ResultFilter />

          </div>

          <div className="lg:col-span-8">

            <ResultsTable />

          </div>

        </div>

      </Container>

    </Section>
  );
}