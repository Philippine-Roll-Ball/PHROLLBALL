import {
  Users,
  Timer,
  Hand,
  type LucideIcon,
} from "lucide-react";

export interface FundamentalItem {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  color: "primary" | "secondary" | "tertiary";
}

export const fundamentalsData: FundamentalItem[] = [
  {
    id: 1,
    icon: Users,
    title: "7 Active Players",
    description:
      "Each team has seven active players on the court, promoting teamwork and fast-paced gameplay.",
    color: "primary",
  },
  {
    id: 2,
    icon: Timer,
    title: "10-Second Dribble Rule",
    description:
      "Players must dribble within ten seconds to maintain possession and keep the game flowing.",
    color: "secondary",
  },
  {
    id: 3,
    icon: Hand,
    title: "Non-Contact Sport",
    description:
      "Physical contact is minimized, emphasizing speed, skating skills, and strategy.",
    color: "tertiary",
  },
];