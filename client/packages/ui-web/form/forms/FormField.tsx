import { forwardRef } from "react";
import { cn } from "@repo/utils";

import { formFieldVariants } from "./Form.styles";
import type { FormFieldProps } from "./Form.types";

export const FormField = forwardRef<
  HTMLDivElement,
  FormFieldProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(formFieldVariants(), className)}
      {...props}
    />
  );
});

FormField.displayName = "FormField";