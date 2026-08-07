import {
    Card,
    CardContent,
    H3,
} from "@repo/ui-web";

export function SkatingCard() {
    return (
        <Card className="bg-primary text-white h-full">

            <CardContent className="space-y-5 p-8">

                <H3 className="text-white">
                    Skating Mastery
                </H3>

                <ul className="space-y-3">

                    <li>✔ Quad or Inline Skates</li>

                    <li>✔ Precision Braking</li>

                    <li>✔ Agile Pivoting</li>

                    <li>✔ Speed & Balance</li>

                </ul>

            </CardContent>

        </Card>
    );
}