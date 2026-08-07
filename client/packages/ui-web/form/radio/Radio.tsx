import { forwardRef } from "react";

import { cn } from "@repo/utils";

import { radioVariants } from "./Radio.styles";
import type { RadioProps } from "./Radio.types";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, size, label, id, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className="inline-flex items-center gap-2 cursor-pointer"
      >
        <input
          ref={ref}
          id={id}
          type="radio"
          className={cn(
            radioVariants({
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

Radio.displayName = "Radio";