import { forwardRef } from "react";

import { cn } from "@repo/utils";

import { cardVariants } from "./Card.styles";
import type { CardProps } from "./Card.types";

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant,
      padding,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({
            variant,
            padding,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";