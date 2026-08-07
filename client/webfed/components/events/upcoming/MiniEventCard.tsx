import {
  Card,
  CardContent,
  H3,
  Paragraph,
} from "@repo/ui-web";

interface MiniEventCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
}

export function MiniEventCard({
  icon,
  title,
  description,
  date,
}: MiniEventCardProps) {
  return (
    <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">

      <CardContent className="p-6">

        <div className="mb-5">
          {icon}
        </div>

        <H3>
          {title}
        </H3>

        <Paragraph className="mt-3">
          {description}
        </Paragraph>

        <Paragraph className="mt-6 font-semibold text-primary">
          {date}
        </Paragraph>

      </CardContent>

    </Card>
  );
}