import Link from "next/link";
import { ChevronRight } from "lucide-react";

import {
  Card,
  CardContent,
  H3,
  Paragraph,
} from "@repo/ui-web";

interface LeagueCardProps {
  title: string;
  description: string;
  href: string;
  accentColor?: string;
}

export function LeagueCard({
  title,
  description,
  href,
  accentColor = "bg-primary",
}: LeagueCardProps) {
  return (
    <Card className="relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className={`absolute left-0 top-0 h-full w-1 ${accentColor}`} />

      <CardContent className="flex h-full flex-col p-8">
        <H3>{title}</H3>

        <Paragraph className="mt-4 flex-1">
          {description}
        </Paragraph>

        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3"
        >
          Learn More
          <ChevronRight size={18} />
        </Link>
      </CardContent>
    </Card>
  );
}