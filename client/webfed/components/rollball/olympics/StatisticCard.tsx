import { H3, Paragraph } from "@repo/ui-web";

import type { Statistic } from "@/data/rollball/statistics";

interface StatisticCardProps {
    statistic: Statistic;
}

export function StatisticCard({
    statistic,
}: StatisticCardProps) {
    return (
        <div className="flex flex-col">

            <H3 className="text-primary text-4xl">
                {statistic.value}
            </H3>

            <Paragraph className="uppercase tracking-wider text-sm">
                {statistic.label}
            </Paragraph>

        </div>
    );
}