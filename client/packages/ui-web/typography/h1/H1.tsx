import { forwardRef } from "react";
import { cn } from "@repo/utils";

import { h1Variants } from "./H1.styles";
import type { H1Props } from "./H1.types";

export const H1 = forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, gradient, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          h1Variants({ gradient }),
          "text-4xl md:text-5xl lg:text-6xl",
          className
        )}
        {...props}
      />
    );
  }
);

H1.displayName = "H1";