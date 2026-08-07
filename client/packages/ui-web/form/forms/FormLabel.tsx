import { forwardRef } from "react";
import { cn } from "@repo/utils";

import type { FormLabelProps } from "./Form.types";

export const FormLabel = forwardRef<
  HTMLLabelElement,
  FormLabelProps
>(({ className, required, children, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium text-text",
        className
      )}
      {...props}
    >
      {children}

      {required && (
        <span className="ml-1 text-error">*</span>
      )}
    </label>
  );
});

FormLabel.displayName = "FormLabel";