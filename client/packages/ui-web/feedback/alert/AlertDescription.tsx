import { forwardRef } from "react";

import { cn } from "@repo/utils";

import type { AlertDescriptionProps } from "./Alert.types";

export const AlertDescription = forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "text-sm opacity-90",
        className
      )}
      {...props}
    />
  );
});

AlertDescription.displayName =
  "AlertDescription";