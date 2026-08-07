import {
  Badge,
  Button,
  Card,
  CardContent,
  H3,
  Paragraph,
} from "@repo/ui-web";

interface ClubCardProps {
  name: string;
  location: string;
  members: number;
  schedule: string;
  featured?: boolean;
}

export function ClubCard({
  name,
  location,
  members,
  schedule,
  featured = false,
}: ClubCardProps) {
  return (
    <Card className="transition-all hover:-translate-y-1 hover:shadow-lg">

      <CardContent className="space-y-4 p-6">

        <div className="flex items-start justify-between">

          <div>

            <H3>{name}</H3>

            <Paragraph>{location}</Paragraph>

          </div>

          {featured && (
            <Badge>
              Top Rated
            </Badge>
          )}

        </div>

        <div className="space-y-2 text-sm text-muted-foreground">

          <p>👥 {members} Members</p>

          <p>📅 {schedule}</p>

        </div>

        <Button
          variant="outline"
          className="w-full"
        >
          View Club
        </Button>

      </CardContent>

    </Card>
  );
}