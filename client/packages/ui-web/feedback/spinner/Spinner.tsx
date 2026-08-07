import { forwardRef } from "react";

import { cn } from "@repo/utils";

import { spinnerVariants } from "./Spinner.styles";
import type { SpinnerProps } from "./Spinner.types";

export const Spinner = forwardRef<
  HTMLDivElement,
  SpinnerProps
>(
  (
    {
      className,
      size,
      variant,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading"
        className={cn(
          spinnerVariants({
            size,
            variant,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Spinner.displayName = "Spinner";