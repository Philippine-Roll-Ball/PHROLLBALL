import { ChevronRight, MapPin, Trophy, CalendarDays, Volleyball } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import tog from "@/assets/gallery/tog.jpg"
import heroBg2 from "@/assets/herobg2.jpg";
import lrbfc from "@/assets/events/lrbfc_concluded.png"
import tryout from "@/assets/news/tryout.jpg"
import coron_skaters from "@/assets/news/coron_skaters.jpg"



// MOCK DATA — replace image imports and details with real event assets later
const EVENTS = [
 {
    status: "upcoming",
    date: "OCT 23-24, 2026",
    location: "Coron, Palawan",
    icon: CalendarDays,
    image: coron_skaters,
    title: "PRBA National Games (Tentative)",
    body: "The highly anticipated PRBA National Games will be held and hosted by the Coron Roll Ball Association",
  }, 
   {
    status: "upcoming",
    date: "SEP 18-20, 2026",
    location: "Quezon City",
    icon: CalendarDays,
    image: tog,
    title: "Coaching for Coaches",
    body: "PRBA will held a sports seminar surrounding the Roll Ball sports to enhance the coaches' Roll Ball skills technically.",
  },
  {
    status: "recent",
    date: "JUN 27, 2026",
    location: "Silvina, Quezon City",
    icon: Trophy,
    image: lrbfc,
    title: "Luzon Roll Ball Friendship Cup 2026",
    body: "Regional champions from across the country converge in Pasig for the biggest domestic Roll Ball tournament of the year.",
  },
  {
    status: "recent",
    date: "JUN 15, 2026",
    location: "Metro Manila, Philippines",
    icon: Trophy,
    image: heroBg2,
    title: "First Luzon Roll Ball Cup — Opening Rounds",
    body: "The opening rounds of the first-ever Luzon Roll Ball Cup wrapped up with strong showings from CRBA, URS RBA, and Lingayen Roll Ball.",
  },
  {
    status: "recent",
    date: "DEC 23, 2025",
    location: "Dubai, UAE",
    icon: Trophy,
    image: heroBg,
    title: "7th Roll Ball World Cup",
    body: "Team Philippines proudly represented the country at the 7th Roll Ball World Cup held in Dubai, UAE.",
  },
  {
    status: "recent",
    date: "SEPTEMBER 10, 17, 24, 2026",
    location: "Quezon City",
    icon: Volleyball,
    image: tryout,
    title: "PRBA Tryouts",
    body: "Elite athletes gathered for an intensive tryouts and training camp ahead of the 7TH Roll Ball World Cup.",
  },
];

export function EventSection() {
  return (
    <section id="events" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              Tournaments &amp; Events
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Recent results and upcoming Roll Ball action.
            </p>
          </div>

          <a
            href="#events"
            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-flag-red transition-colors"
          >
            View All
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {EVENTS.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider shadow ${
                      item.status === "upcoming"
                        ? "bg-primary text-primary-foreground"
                        : "bg-background/90 text-muted-foreground"
                    }`}
                  >
                    {item.status === "upcoming" ? "Upcoming" : "Recent"}
                  </span>

                  <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-primary shadow">
                    <Icon className="w-5 h-5" />
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-flag-red">
                    {item.date}
                  </span>

                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-foreground">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{item.location}</span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}