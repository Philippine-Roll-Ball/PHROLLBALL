import { forwardRef } from "react";
import { cn } from "@repo/utils";

import { inputVariants } from "./Input.styles";
import type { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={cn(
          inputVariants({
            variant,
            size,
            error,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";