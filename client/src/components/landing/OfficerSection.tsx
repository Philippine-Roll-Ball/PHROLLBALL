import seneres from "@/assets/officers/seneres.png";
import tony from "@/assets/officers/tony.png"
import sison from "@/assets/officers/sison.png"
import hipos from "@/assets/officers/hipos2.png"
import relucano from "@/assets/officers/relucano.png";

import { User } from "lucide-react";

// MOCK DATA — replace `image` with actual photo imports later
// e.g. import antonioPhoto from "@/assets/officers/antonio-ortega.jpg";
const PRESIDENT = {
  name: "Antonio T. Ortega",
  role: "President & Executive Director, PRBA",
  bio: "Antonio T. Ortega serves as the President and Executive Director of PRBA, providing strategic leadership, guidance, and overall vision for the organization's continued growth and development. His role ensures that PRBA's mission, goals, and initiatives are effectively implemented and aligned with long-term organizational success.",
  image: tony,
};

const OFFICERS = [
  {
    name: "Dr. Julius Sison, PhD",
    role: "PRBA Secretary General & President, Lingayen Roll Ball Association",
    bio: "Oversees official records, correspondence, and organizational governance while leading the growth of Roll Ball in Lingayen.",
    image: sison,
  },
  {
    name: "Jamir Vincent Hipos",
    role: "President, Coron Roll Ball Association",
    bio: "Leads the development and promotion of Roll Ball within the Coron skating community.",
    image: hipos,
  },
  {
    name: "Jayson Señeres",
    role: "President, United Reborn Skaters Roll Ball Association",
    bio: "Champions Roll Ball initiatives and community engagement for the United Reborn Skaters Roll Ball Association.",
    image: seneres
  },
  {
    name: "Jefferson Joven Señeres",
    role: "OIC, Cainta Roll Ball Association",
    bio: "Champions Roll Ball initiatives and community engagement for the Cainta Association.",
    image: null as string | null
  },
  {
    name: "Mark Ken Relucano ",
    role: "President, Bicol Roll Ball Association",
    bio: "Champions Roll Ball initiatives and community engagement for the Bicol Roll Ball Association.",
    image: relucano
  },
];

// Shared placeholder — swap the `image` field above with a real import to replace
const AvatarPlaceholder = ({ className = "" }: { className?: string }) => (
  <div
    className={`flex items-center justify-center bg-muted ${className}`}
  >
    <User className="w-1/3 h-1/3 text-muted-foreground/50" strokeWidth={1.5} />
  </div>
);

export function OfficerSection() {
  return (
    <section id="officers" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Leadership
          </span>
          <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            Meet The Officers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The people driving Roll Ball forward across the Philippines.
          </p>
        </div>

        {/* Featured President */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-6 sm:p-10 grid md:grid-cols-[280px_1fr] gap-8 items-center">
          {PRESIDENT.image ? (
            <img
              src={PRESIDENT.image}
              alt={PRESIDENT.name}
              className="w-full h-64 md:h-72 object-cover rounded-2xl"
            />
          ) : (
            <AvatarPlaceholder className="w-full h-64 md:h-72 rounded-2xl" />
          )}

          <div>
            <h3 className="font-display text-2xl sm:text-3xl text-foreground">
              {PRESIDENT.name}
            </h3>
            <p className="text-primary font-medium mt-1">{PRESIDENT.role}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {PRESIDENT.bio}
            </p>
          </div>
        </div>

        {/* Officer Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFICERS.map((officer) => (
            <div
              key={officer.name}
              className="bg-card border border-border rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-300"
            >
              {officer.image ? (
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
              ) : (
                <AvatarPlaceholder className="w-24 h-24 rounded-full mx-auto mb-4" />
              )}

              <h3 className="font-display text-lg text-foreground">
                {officer.name}
              </h3>
              <p className="text-primary text-sm font-medium mt-1">
                {officer.role}
              </p>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                {officer.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}