import { ChevronRight, Newspaper, Handshake, Video, Award, Volleyball } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg1 from "@/assets/herobg.jpg";
import heroBg2 from "@/assets/herobg2.jpg";
import courtesy_call from "@/assets/news/courtesy_call.jpg"
import psc_award from "@/assets/news/psc_award.jpg";
import dubai from "@/assets/news/dubai.jpg";
import coron_skaters from "@/assets/news/coron_skaters.jpg";
import welcome_lingayen from "@/assets/news/welcome_lingayen.png";
import silvina_moa_signing from "@/assets/news/silvina_moa_signing.jpg";
import first_friendship_cup from "@/assets/news/first_friendship_cup.jpg";
const NEWS = [
  {
    date: "JUN 18, 2026",
    icon: Award,
    image: psc_award,
    title: "Philippine Sports Commission (PSC) Awarding",
    body: "The Philippine Roll Ball Association, Inc. (PRBA) proudly recognizes and awards the athletes who represented the Philippines in the 4th Asian Roll Ball Championship and the 7th Roll Ball World Cup 2025."
  },

  {
    date: "JUN 18, 2026",
    icon: Newspaper,
    image: courtesy_call,
    title: "Courtesy Call with PSC Executive Director",
    body: "PRBA conducted a courtesy call with Philippine Sports Commission (PSC) Executive Director Atty. Guillermo Iroy to discuss initiatives and opportunities for the continued growth and development of Roll Ball and other roller skating sports in the Philippines."
  },
  {
    date: "JUN 15, 2026",
    icon: Newspaper,
    image: first_friendship_cup,
    title: "First Luzon Roll Ball Cup Opened!",
    body: "The first-ever Luzon Roll Ball Cup has been opened by the PRBA inviting various Roll Ball Associations including CRBA, URS RBA, and Lingayen Roll Ball."
  },
  {
    date: "JUN 2, 2026",
    icon: Newspaper,
    image: silvina_moa_signing,
    title: "MOA Signing Silvina Court",
    body: "Philippine Roll Ball Association (PRBA) succesfully signed the Memorandum of Agreement with Silvina Village Homeowners Association Inc. in Collaboration with URS RBA."
  },
  {
    date: "May 7, 2026",
    icon: Newspaper,
    image: welcome_lingayen,
    title: "Lingayen Roll Ball Unlocked!",
    body: "PRBA together with URS RBA and Coron RBA traveled to Pangasinan to introduce Roll Ball sports to their skating community."
  },
  {
    date: "APR 1, 2026",
    icon: Volleyball,
    image: coron_skaters,
    title: "Palawan Roll Ball Association Unlocked!",
    body: "PRBA led by Ptr. Tony Ortega successfully acknowledges the newly recognized roll ball association from Coron Skaters Club"
  },
  {
    date: "DEC 23, 2025",
    icon: Volleyball,
    image: dubai,
    title: "7th Roll ball World CUP at Dubai, UAE",
    body: "The Philippine Roll Ball Association, Inc. (PRBA) proudly represents the Philippines as they participated on the 7th Roll Ball World CUP held at Dubai, UAE"
  },
  {
    date: "OCT 24, 2024",
    icon: Newspaper,
    image: heroBg,
    title: "National Team Training Camp kicks off in Pasig",
    body: "Elite athletes from across the country gather for intensive training sessions ahead of the upcoming Asian Championship.",
  },
  {
    date: "SEP 12, 2024",
    icon: Handshake,
    image: heroBg1,
    title: "PRBA Partners with DepEd for School Sports",
    body: "A landmark agreement to include Roll Ball in regional sports meets starting next year.",
  },
  {
    date: "AUG 30, 2024",
    icon: Video,
    image: heroBg2,
    title: "Watch: Highlights from the Cebu Open",
    body: "Relive the most exciting moments from the three-day tournament in the Queen City of the South.",
  },
  
];

export function NewsSection() {
  return (
    <section id="news" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              Latest News
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Stay updated with PRBA movements.
            </p>
          </div>

          <a
            href="#news"
            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-flag-red transition-colors"
          >
            View All
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {NEWS.map((item) => {
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