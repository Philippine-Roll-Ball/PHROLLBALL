import Link from "next/link";
import {
  Card,
  CardContent,
  Badge,
  H3,
  Paragraph,
} from "@repo/ui-web";

interface NewsItemProps {
  category: string;
  title: string;
  href: string;
}

export function NewsItem({
  category,
  title,
  href,
}: NewsItemProps) {
  return (
    <Card className=" transition-all hover:shadow-lg">
      <CardContent className="space-y-4 p-6">
        <Badge variant="secondary">
          {category}
        </Badge>

        <H3>{title}</H3>

        <Link
          href={href}
          className="text-primary font-medium hover:underline"
        >
          Read More →
        </Link>
      </CardContent>
    </Card>
  );
}