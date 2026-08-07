import { forwardRef } from "react";
import { cn } from "@repo/utils";

import type { FormHelperTextProps } from "./Form.types";

export const FormHelperText = forwardRef<
  HTMLParagraphElement,
  FormHelperTextProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "text-sm text-text-muted",
        className
      )}
      {...props}
    />
  );
});

FormHelperText.displayName = "FormHelperText";