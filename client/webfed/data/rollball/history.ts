export interface HistoryItem {
    id: number;
    year: string;
    title: string;
    description: string;
    image: string;
    color?: "primary" | "secondary" | "tertiary";
}

export const historyData: HistoryItem[] = [
    {
        id: 1,
        year: "2013",
        title: "First Introduction",
        description:
            "Roll Ball was introduced in the Philippines through exhibition games and grassroots development programs.",
        image: "/images/history/2013.jpg",
        color: "primary",
    },
    {
        id: 2,
        year: "2016",
        title: "PRBA Establishment",
        description:
            "The Philippine Roll Ball Association was formally organized to develop and promote Roll Ball nationwide.",
        image: "/images/history/2016.jpg",
        color: "secondary",
    },
    {
        id: 3,
        year: "2019",
        title: "World Cup Debut",
        description:
            "The Philippine National Team represented the country in its first international Roll Ball World Cup.",
        image: "/images/history/2019.jpg",
        color: "primary",
    },
    {
        id: 4,
        year: "2024",
        title: "National Expansion",
        description:
            "Regional leagues and youth development programs expanded across the Philippines.",
        image: "/images/history/2024.jpg",
        color: "tertiary",
    },
];