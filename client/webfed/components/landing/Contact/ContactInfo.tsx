import {
  H3,
  Paragraph,
} from "@repo/ui-web";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">

      <div className="flex gap-4">

        <MapPin className="mt-1 text-primary" />

        <div>
          <H3>Office Address</H3>

          <Paragraph>
            Unit 402, Sports Complex Building,
            Manila, Philippines
          </Paragraph>
        </div>

      </div>

      <div className="flex gap-4">

        <Mail className="mt-1 text-primary" />

        <div>
          <H3>Email</H3>

          <Paragraph>
            info@philippinerollball.org
          </Paragraph>
        </div>

      </div>

      <div className="flex gap-4">

        <Phone className="mt-1 text-primary" />

        <div>
          <H3>Phone</H3>

          <Paragraph>
            +63 (2) 8888-1234
          </Paragraph>
        </div>

      </div>

    </div>
  );
}