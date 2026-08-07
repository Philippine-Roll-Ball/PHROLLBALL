import { forwardRef } from "react";
import { cn } from "@repo/utils";

import { textVariants } from "./Text.styles";
import type { TextProps } from "./Text.types";

export const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(textVariants(), className)}
      {...props}
    />
  )
);

Text.displayName = "Text";