import { forwardRef } from "react";

import { cn } from "@repo/utils";

import type { AlertTitleProps } from "./Alert.types";

export const AlertTitle = forwardRef<
  HTMLHeadingElement,
  AlertTitleProps
>(({ className, ...props }, ref) => {
  return (
    <h5
      ref={ref}
      className={cn(
        "font-semibold leading-none",
        className
      )}
      {...props}
    />
  );
});

AlertTitle.displayName = "AlertTitle";