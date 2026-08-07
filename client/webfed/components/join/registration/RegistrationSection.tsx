import {
  Container,
  Section,
} from "@repo/ui-web";

import { BenefitsCard } from "./BenefitsCard";
import { CommunityCard } from "./CommunityCard";
import { RegistrationForm } from "./RegistrationForm";
import { StatsCard } from "./StatsCard";

export function RegistrationSection() {
  return (
    <Section>

      <Container>

        <div className="grid gap-8 lg:grid-cols-12">

          <div className="lg:col-span-5">

            <RegistrationForm />

          </div>

          <div className="grid gap-6 lg:col-span-7 md:grid-cols-2">

            <StatsCard />

            <BenefitsCard />

            <div className="md:col-span-2">

              <CommunityCard />

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}