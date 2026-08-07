"use client";

import dynamic from "next/dynamic";

import { Card } from "@repo/ui-web";

const PhilippinesMap = dynamic(
  () => import("./PhilippinesMap"),
  {
    ssr: false,
  }
);

export function ClubMap() {
  return (
    <Card className="overflow-hidden p-0">
      <div className="h-[550px]">
        <PhilippinesMap />
      </div>
    </Card>
  );
}