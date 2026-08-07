import {
  Container,
  H2,
  Paragraph,
  Section,
} from "@repo/ui-web";

import { PartnerLogo } from "./PartnerLogo";

export function PartnersSection() {
  return (
    <Section>

      <Container>

        <div className="mb-12 text-center">

          <H2>
            Official Partners
          </H2>

          <Paragraph className="mt-4">
            Proudly working together with organizations
            and institutions that support the growth of
            Roll Ball in the Philippines.
          </Paragraph>

        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">

          <PartnerLogo
            name="PSC"
           logo="/images/PRBALOGO.png"
          />

          <PartnerLogo
            name="POC"
            logo="/images/PRBALOGO.png"
          />

          <PartnerLogo
            name="DepEd"
            logo="/images/PRBALOGO.png"
          />

          <PartnerLogo
            name="Sponsor"
            logo="/images/PRBALOGO.png"
          />

          <PartnerLogo
            name="Sponsor"
            logo="/images/PRBALOGO.png"
          />

        </div>

      </Container>

    </Section>
  );
}