import {
  Card,
  CardContent,
  H3,
  Paragraph,
} from "@repo/ui-web";

export function StatsCard() {
  return (
    <Card>

      <CardContent className="p-8">

        <Paragraph className="text-sm uppercase tracking-wider text-secondary">
          LIVE SCOUTING
        </Paragraph>

        <H3 className="mt-4 text-5xl">
          1,240+
        </H3>

        <Paragraph className="mt-3">
          Active Registered Players
        </Paragraph>

      </CardContent>

    </Card>
  );
}