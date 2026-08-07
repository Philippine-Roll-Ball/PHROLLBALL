import { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@repo/utils";

import { buttonVariants } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
          }),
          className
        )}
        {...props}
      >
        {loading && (
          <Loader2 className="h-4 w-4 animate-spin" />
        )}

        {!loading && leftIcon}

        {children}

        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";