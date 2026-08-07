import {
  Container,
  H2,
  Paragraph,
  Section,
} from "@repo/ui-web";

import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function ContactSection() {
  return (
    <Section>

      <Container>

        <div className="mb-14">

          <H2>
            Get in Touch
          </H2>

          <Paragraph className="mt-1">
            Have questions about PRBA, tournaments,
            membership, or partnerships? We'd love
            to hear from you.
          </Paragraph>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>

      </Container>

    </Section>
  );
}