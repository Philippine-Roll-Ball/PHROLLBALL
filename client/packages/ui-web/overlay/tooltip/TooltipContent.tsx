"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { forwardRef } from "react";

import { cn } from "@repo/utils";

import { tooltipContentVariants } from "./Tooltip.styles";

export const TooltipContent = forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    variant?: "default" | "inverted";
  }
>(
  (
    {
      className,
      sideOffset = 6,
      variant,
      ...props
    },
    ref
  ) => (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          tooltipContentVariants({
            variant,
          }),
          className
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
);

TooltipContent.displayName =
  TooltipPrimitive.Content.displayName;