"use client";

import Link from "next/link";
import {
  Badge,
  Button,
  Container,
  H1,
  Paragraph,
  Section,
} from "@repo/ui-web";

export function HeroSection() {
  return (
    <Section className="relative min-h-screen overflow-hidden p-0">
      {/* Background Video */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          poster="/images/hero.jpg"
        >
          <source src="/videos/rollball.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

      {/* Blue Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />

      <Container className="relative flex min-h-screen items-center">
        <div className="grid w-full items-end gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <Badge className="px-4 py-1">
              🇵🇭 Official National Sports Federation
            </Badge>

            <H1 className="mt-6 text-white">
              Philippine
              <br />
              Roll Ball
              <br />
              Association
            </H1>

            <Paragraph className="mt-6 max-w-xl text-lg leading-8 text-white/85">
              Developing world-class Roll Ball athletes through national
              competitions, grassroots programs, coaching excellence, and
              international representation.
            </Paragraph>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/join">
                <Button size="lg">
                  Join Federation
                </Button>
              </Link>

              <Link href="/rollball">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white"
                >
                  Explore Roll Ball
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="hidden justify-end lg:flex">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-white">50+</h2>
                  <p className="text-sm uppercase tracking-widest text-white/70">
                    Countries
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-white">1200+</h2>
                  <p className="text-sm uppercase tracking-widest text-white/70">
                    Players
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-white">12</h2>
                  <p className="text-sm uppercase tracking-widest text-white/70">
                    Regions
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-white">10+</h2>
                  <p className="text-sm uppercase tracking-widest text-white/70">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center text-white/80">
            <span className="mb-2 text-xs uppercase tracking-[0.3em]">
              Scroll
            </span>

            <div className="flex h-10 w-6 justify-center rounded-full border border-white/40">
              <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-white" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}