import { HTMLAttributes } from "react";

import { cn } from "@repo/utils";

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(className)}
      {...props}
    />
  );
}