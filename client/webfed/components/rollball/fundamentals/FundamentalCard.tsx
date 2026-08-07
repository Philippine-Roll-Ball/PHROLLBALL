import {
    Card,
    CardContent,
    H3,
    Paragraph,
} from "@repo/ui-web";

import type { FundamentalItem } from "@/data/rollball/fundamentals";

interface Props {
    item: FundamentalItem;
}

export function FundamentalCard({ item }: Props) {
    const Icon = item.icon;

    return (
        <Card className="h-full">
            <CardContent className="flex flex-col items-center p-8 text-center">
                <div
                    className={`
                        mb-6 flex h-16 w-16 items-center justify-center rounded-full
                        ${
                            item.color === "primary"
                                ? "bg-primary/10 text-primary"
                                : item.color === "secondary"
                                ? "bg-secondary/10 text-secondary"
                                : "bg-tertiary/10 text-tertiary"
                        }
                    `}
                >
                    <Icon className="h-8 w-8" strokeWidth={2} />
                </div>

                <H3>{item.title}</H3>

                <Paragraph className="mt-4">
                    {item.description}
                </Paragraph>
            </CardContent>
        </Card>
    );
}