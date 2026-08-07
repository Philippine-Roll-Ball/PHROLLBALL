import { HTMLAttributes } from "react";

import { cn } from "@repo/utils";

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mt-6 flex items-center justify-end gap-2",
        className
      )}
      {...props}
    />
  );
}