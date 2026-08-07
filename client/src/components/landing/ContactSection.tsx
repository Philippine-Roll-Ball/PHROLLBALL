import { Mail, Phone, MapPin } from "lucide-react";

// MOCK DATA — replace with real contact details as needed
const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    lines: [
      "phil.rollball.fed.021023@gmail.com",
      "rollball.pilipinas0525@gmail.com",
    ],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+63 912 345 6789"],
  },
  {
    icon: MapPin,
    label: "Location",
    lines: ["Metro Manila, Philippines"],
  },
];

const MAP_EMBED_URL =
  "https://www.google.com/maps?ll=14.702275,121.071471&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=18412946883158036198&output=embed";

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Reach out to PRBA for partnerships, events, or general inquiries.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left - Contact Details */}
          <div className="space-y-4">
            {CONTACT_INFO.map((item) => (
              <div
                key={item.label}
                className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-foreground font-medium text-sm mb-1">
                    {item.label}
                  </div>
                  {item.lines.map((line) => (
                    <p key={line} className="text-muted-foreground text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right - Google Map */}
          <div className="rounded-2xl overflow-hidden border border-border min-h-[320px] lg:min-h-0">
            <iframe
              src={MAP_EMBED_URL}
              title="PRBA Location Map"
              className="w-full h-full min-h-[320px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}