"use client";

import Image from "next/image";
import { ArrowRight, Bolt, Users, Target } from "lucide-react";

import {
  Button,
  Container,
  H2,
  Paragraph,
  Section,
} from "@repo/ui-web";

import { FeatureCard } from "./FeatureCard";

export function AboutSection() {
  return (
    <Section className="py-24">
      <Container>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left */}

          <div>

            <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
               FASTEST GROWING SPORT IN ASIA
            </div>

            <H2 className="mt-6">
              What is <span className="text-primary">Roll Ball?</span>
            </H2>

            <Paragraph className="mt-6">
              Experience the ultimate fusion of basketball,
              handball, and roller skating. Roll Ball is a
              high-speed team sport requiring agility,
              teamwork, precision, and quick decision-making.
            </Paragraph>

            <div className="mt-8">
              <Button>
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="overflow-hidden rounded-full border-8 border-white shadow-2xl">

              <Image
                src="/images/about1.jpg"
                alt="Roll Ball"
                width={500}
                height={500}
                className="aspect-square object-cover"
              />

            </div>

          </div>

        </div>

        {/* Features */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <FeatureCard
            icon={<Bolt size={28} />}
            title="Explosive Speed"
            description="Athletes reach incredible speed on skates while maintaining full ball control."
          />

          <FeatureCard
            icon={<Users size={28} />}
            title="Teamwork"
            description="Communication and coordination are essential for every successful attack."
          />

          <FeatureCard
            icon={<Target size={28} />}
            title="Precision"
            description="Every pass, movement, and shot requires perfect timing and accuracy."
          />

        </div>

      </Container>
    </Section>
  );
}