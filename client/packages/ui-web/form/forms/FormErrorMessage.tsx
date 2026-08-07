import { forwardRef } from "react";
import { cn } from "@repo/utils";

import type { FormErrorMessageProps } from "./Form.types";

export const FormErrorMessage = forwardRef<
  HTMLParagraphElement,
  FormErrorMessageProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "text-sm font-medium text-error",
        className
      )}
      {...props}
    />
  );
});

FormErrorMessage.displayName = "FormErrorMessage";