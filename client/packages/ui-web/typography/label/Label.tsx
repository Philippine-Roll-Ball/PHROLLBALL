import { forwardRef } from "react";
import { cn } from "@repo/utils";

import { labelVariants } from "./Label.styles";
import type { LabelProps } from "./Label.types";

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    />
  )
);

Label.displayName = "Label";