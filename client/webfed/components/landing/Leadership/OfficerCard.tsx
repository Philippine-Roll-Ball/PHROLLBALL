import Image from "next/image";

import {
  Avatar,
  Card,
  CardContent,
  H3,
  Paragraph,
} from "@repo/ui-web";

interface OfficerCardProps {
  image: string;
  name: string;
  position: string;
}

export function OfficerCard({
  image,
  name,
  position,
}: OfficerCardProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <CardContent className="flex flex-col items-center p-8 text-center">

       <Avatar
  className="h-28 w-28"
  src={image}
  alt={name}
/>

        <H3 className="mt-6">
          {name}
        </H3>

        <Paragraph className="mt-2 text-primary font-semibold uppercase tracking-wide">
          {position}
        </Paragraph>

      </CardContent>

    </Card>
  );
}