import { HTMLAttributes } from "react";

import { cn } from "@repo/utils";

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mb-4 flex flex-col gap-1",
        className
      )}
      {...props}
    />
  );
}