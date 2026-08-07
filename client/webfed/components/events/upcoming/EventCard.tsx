import Image from "next/image";

import {
  Badge,
  Card,
  CardContent,
  H3,
  Paragraph,
} from "@repo/ui-web";

interface EventCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

export function EventCard({
  image,
  category,
  title,
  description,
  date,
  location,
}: EventCardProps) {
  return (
    <Card className="overflow-hidden h-full p-0">

      <div className="relative h-56">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        <div className="absolute top-4 right-4">

          <Badge variant="secondary">
            {category}
          </Badge>

        </div>

      </div>

      <CardContent className="p-6">

        <H3>
          {title}
        </H3>

        <Paragraph className="mt-3">
          {description}
        </Paragraph>

        <div className="mt-6 space-y-2 text-sm text-muted-foreground">

          <p>{date}</p>

          <p>{location}</p>

        </div>

      </CardContent>

    </Card>
  );
}