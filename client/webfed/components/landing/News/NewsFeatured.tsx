import Image from "next/image";
import Link from "next/link";

import {
  Badge,
  Card,
  H2,
  Paragraph,
  Button,
} from "@repo/ui-web";

interface NewsFeaturedProps {
  image: string;
  category: string;
  title: string;
  description: string;
  href: string;
}

export function NewsFeatured({
  image,
  category,
  title,
  description,
  href,
}: NewsFeaturedProps) {
  return (
    <Card className="overflow-hidden">

      <Image
        src={image}
        alt={title}
        width={900}
        height={600}
        className="h-[420px] w-full object-cover"
      />

      <div className="space-y-5 p-8">

        <Badge>
          {category}
        </Badge>

        <H2>
          {title}
        </H2>

        <Paragraph>
          {description}
        </Paragraph>

        <Link href={href}>
          <Button>
            Read Full Article
          </Button>
        </Link>

      </div>

    </Card>
  );
}