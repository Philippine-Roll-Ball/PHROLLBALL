import Image from "next/image";

import {
  Badge,
  Button,
  Card,
  CardContent,
  H3,
  Paragraph,
} from "@repo/ui-web";

interface FeaturedEventCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

export function FeaturedEventCard({
  image,
  category,
  title,
  description,
  date,
  location,
}: FeaturedEventCardProps) {
  return (
    <Card className="overflow-hidden p-0">

      <div className="relative h-72">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />

        <div className="absolute left-6 top-6">

          <Badge>
            {category}
          </Badge>

        </div>

      </div>

      <CardContent className="p-8">

        <H3>
          {title}
        </H3>

        <Paragraph className="mt-4">
          {description}
        </Paragraph>

        <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">

          <span>
            📅 {date}
          </span>

          <span>
            📍 {location}
          </span>

        </div>

        <div className="mt-8 flex gap-4">

          <Button>
            Register
          </Button>

          <Button variant="outline">
            View Details
          </Button>

        </div>

      </CardContent>

    </Card>
  );
}