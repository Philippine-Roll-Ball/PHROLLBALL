"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  Container,
  H2,
  Paragraph,
  Section,
} from "@repo/ui-web";

import { PlayerCard } from "./PlayerCard";

const players = [
  {
    image: "/images/players/epie.jpg",
    number: "09",
    name: "Jefferson Seneres",
    position: "Head Coach",
  },
  {
    image: "/images/players/jayson.jpg",
    number: "02",
    name: "Jayson Seneres",
    position: "Team Captain",
  },
  {
    image: "/images/players/roy.jpg",
    number: "10",
    name: "Roy Deliarte",
    position: "Goalkeeper",
  },
  {
    image: "/images/players/gj.jpg",
    number: "07",
    name: "Gil James Pesquesa",
    position: "Player",
  },
  {
    image: "/images/players/butch.jpg",
    number: "08",
    name: "Butch leonardo",
    position: "Player",
  },
  {
    image: "/images/players/ken.jpg",
    number: "11",
    name: "Mark Ken Relucano",
    position: "Player",
  },
  {
    image: "/images/players/neon.jpg",
    number: "12",
    name: "Felmar Buslon",
    position: "Player",
  },
   {
    image: "/images/players/elwin.jpg",
    number: "05",
    name: "Elwin Jumadiao",
    position: "Player",
  },
    {
    image: "/images/players/roymagno.jpg",
    number: "06",
    name: "Roy Magno",
    position: "Player",
  },
  
  
];

export function NationalTeamSection() {
  return (
    <Section
      id="Team"
      className="bg-primary text-white"
    >
      <Container>
        <div className="mb-14 text-center">
          <H2 className="text-white">
            Meet the National Team
          </H2>

          <Paragraph className="mt-4 text-white/80">
            The elite athletes proudly representing the Philippines
            in international Roll Ball competitions.
          </Paragraph>
        </div>

        <Carousel
  autoplay
  delay={3000}
  loop
  className="w-full"
>
  <CarouselContent>
    {players.map((player) => (
      <CarouselItem key={player.number + player.name}>
        <PlayerCard {...player} />
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
      </Container>
    </Section>
  );
}