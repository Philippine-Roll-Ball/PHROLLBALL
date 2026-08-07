import { forwardRef } from "react";

import { cn } from "@repo/utils";

import { skeletonVariants } from "./Skeleton.styles";
import type { SkeletonProps } from "./Skeleton.types";

export const Skeleton = forwardRef<
  HTMLDivElement,
  SkeletonProps
>(
  (
    {
      className,
      variant,
      animation,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          skeletonVariants({
            variant,
            animation,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";