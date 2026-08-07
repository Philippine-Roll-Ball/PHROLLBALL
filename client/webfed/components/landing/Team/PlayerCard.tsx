import Image from "next/image";

import {
  Card,
  CardContent,
  H3,
  Paragraph,
} from "@repo/ui-web";

interface PlayerCardProps {
  image: string;
  number: string;
  name: string;
  position: string;
}

export function PlayerCard({
  image,
  number,
  name,
  position,
}: PlayerCardProps) {
  return (
    <Card className="group overflow-hidden">

      <div className="relative aspect-[3/4] overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
          {number}
        </div>

      </div>

      <CardContent className="py-6 text-center">

        <H3>{name}</H3>

        <Paragraph className="mt-2 uppercase tracking-wider">
          {position}
        </Paragraph>

      </CardContent>

    </Card>
  );
}