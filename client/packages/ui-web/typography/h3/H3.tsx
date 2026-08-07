import { forwardRef } from "react";
import { cn } from "@repo/utils";

import { h3Variants } from "./H3.styles";
import type { H3Props } from "./H3.types";

export const H3 = forwardRef<HTMLHeadingElement, H3Props>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(h3Variants(), className)}
      {...props}
    />
  )
);

H3.displayName = "H3";