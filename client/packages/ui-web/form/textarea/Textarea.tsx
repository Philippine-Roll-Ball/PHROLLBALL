import { forwardRef } from "react";
import { cn } from "@repo/utils";

import { textareaVariants } from "./Textarea.styles";
import type { TextareaProps } from "./Textarea.types";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, variant, error, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        textareaVariants({
          variant,
          error,
        }),
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";