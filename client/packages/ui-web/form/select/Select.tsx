import { forwardRef } from "react";
import { cn } from "@repo/utils";

import { selectVariants } from "./Select.styles";
import type { SelectProps } from "./Select.types";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      variant,
      size,
      error,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <select
        ref={ref}
        className={cn(
          selectVariants({
            variant,
            size,
            error,
          }),
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = "Select";