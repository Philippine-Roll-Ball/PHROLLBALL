import { forwardRef } from "react";
import { cn } from "@repo/utils";

import { containerVariants } from "./Container.styles";
import type { ContainerProps } from "./Container.types";

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ size }), className)}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";