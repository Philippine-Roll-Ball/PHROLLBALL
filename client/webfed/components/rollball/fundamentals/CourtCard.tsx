import Image from "next/image";

import {
    Card,
    CardContent,
    H3,
    Paragraph,
} from "@repo/ui-web";

export function CourtCard() {
    return (
        <Card className="overflow-hidden h-full">

            <div className="relative h-80">

                <Image
                    src="/images/rollball/court.jpg"
                    alt="Roll Ball Court"
                    fill
                    className="object-cover"
                />

            </div>

            <CardContent className="p-6">

                <H3>Court Dimensions</H3>

                <Paragraph className="mt-3">
                    Standard Roll Ball courts are designed for speed,
                    quick transitions, and dynamic gameplay.
                </Paragraph>

            </CardContent>

        </Card>
    );
}