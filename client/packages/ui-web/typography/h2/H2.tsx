import { forwardRef } from "react";
import { cn } from "@repo/utils";

import { h2Variants } from "./H2.styles";
import type { H2Props } from "./H2.types";

export const H2 = forwardRef<HTMLHeadingElement, H2Props>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(h2Variants(), className)}
      {...props}
    />
  )
);

H2.displayName = "H2";