"use client";

import { useState } from "react";

import {
  Button,
  Card,
  CardContent,
  H3,
} from "@repo/ui-web";

const filters = ["2026", "2025", "2024", "All Time"];

export function ResultFilter() {
  const [selected, setSelected] = useState("2026");

  return (
    <Card>
      <CardContent className="p-6">

        <H3 className="mb-6">
          Quick Filter
        </H3>

        <div className="flex flex-wrap gap-3">

          {filters.map((year) => (
            <Button
              key={year}
              variant={selected === year ? "primary" : "outline"}
              onClick={() => setSelected(year)}
            >
              {year}
            </Button>
          ))}

        </div>

      </CardContent>
    </Card>
  );
}