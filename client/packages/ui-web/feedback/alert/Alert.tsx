import { forwardRef } from "react";

import { cn } from "@repo/utils";

import {
  alertVariants,
  alertContentVariants,
} from "./Alert.styles";

import type { AlertProps } from "./Alert.types";

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          alertVariants({
            variant,
          }),
          className
        )}
        {...props}
      >
        <div className={alertContentVariants()}>
          {children}
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";