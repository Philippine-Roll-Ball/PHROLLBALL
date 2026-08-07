import Image from "next/image";

import { H3, Paragraph } from "@repo/ui-web";

import type { HistoryItem } from "@/data/rollball/history";

interface HistoryTimelineItemProps {
    item: HistoryItem;
    reverse?: boolean;
}

export function HistoryTimelineItem({
    item,
    reverse = false,
}: HistoryTimelineItemProps) {
    const colorClass =
        item.color === "secondary"
            ? "bg-secondary"
            : item.color === "tertiary"
            ? "bg-tertiary"
            : "bg-primary";

    return (
        <div className="relative">

            <div
                className={`grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] ${
                    reverse ? "" : ""
                }`}
            >
                {/* LEFT */}

                <div
                    className={
                        reverse
                            ? "order-3"
                            : "order-1 flex justify-end"
                    }
                >
                    {!reverse && (
                        <div className="relative h-64 w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition duration-500 hover:scale-105"
                            />
                        </div>
                    )}

                    {reverse && (
                        <div className="space-y-4">
                            <H3>{item.title}</H3>

                            <Paragraph>
                                {item.description}
                            </Paragraph>
                        </div>
                    )}
                </div>

                {/* YEAR */}

                <div className="order-2 flex justify-center">

                    <div
                        className={`
                            ${colorClass}
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-full
                            text-sm
                            font-bold
                            text-white
                            shadow-lg
                            ring-8
                            ring-background
                        `}
                    >
                        {item.year}
                    </div>

                </div>

                {/* RIGHT */}

                <div
                    className={
                        reverse
                            ? "order-1 flex justify-start"
                            : "order-3"
                    }
                >
                    {reverse ? (
                        <div className="relative h-64 w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition duration-500 hover:scale-105"
                            />
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <H3>{item.title}</H3>

                            <Paragraph>
                                {item.description}
                            </Paragraph>
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
}