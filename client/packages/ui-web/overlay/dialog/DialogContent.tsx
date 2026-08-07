import { HTMLAttributes } from "react";
import { cn } from "@repo/utils";

export function DialogContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-6", className)}
      {...props}
    />
  );
}