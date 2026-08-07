import {
  briefing,
  coron,
  dona,
  dubai,
  goal,
  phteam,
  roll,
  tog,
  training,
} from "@/assets/gallery";

const IMAGES = [
  { src: goal, alt: "Athlete scoring a goal", span: "sm:col-span-2 sm:row-span-2" },
  { src: phteam, alt: "Philippine Roll Ball team", span: "" },
  { src: dubai, alt: "Team representing at the World Cup in Dubai", span: "" },
  { src: training, alt: "Youth training session", span: "sm:col-span-2" },
  { src: briefing, alt: "Coach briefing the team", span: "" },
  { src: coron, alt: "Coron Roll Ball skaters", span: "" },
  { src: tog, alt: "Team celebrating together", span: "" },
  { src: roll, alt: "Athlete handling the roll ball", span: "" },
  { src: dona, alt: "Roll Ball community moment", span: "" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            Moments on Wheels
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Capturing the heart and soul of Philippine Roll Ball.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-4">
          {IMAGES.map((img) => (
            <div
              key={img.alt}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}