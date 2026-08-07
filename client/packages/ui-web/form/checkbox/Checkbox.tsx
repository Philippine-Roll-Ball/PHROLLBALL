import { forwardRef } from "react";

import { cn } from "@repo/utils";

import { checkboxVariants } from "./Checkbox.styles";
import type { CheckboxProps } from "./Checkbox.types";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, size, label, id, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className="inline-flex items-center gap-2 cursor-pointer"
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className={cn(
            checkboxVariants({
              size,
            }),
            className
          )}
          {...props}
        />

        {label && (
          <span className="text-sm text-text">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";