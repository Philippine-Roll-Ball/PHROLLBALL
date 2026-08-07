import { forwardRef } from "react";

import { cn } from "@repo/utils";

import { breadcrumbVariants } from "./Breadcrumb.styles";
import type { BreadcrumbProps } from "./Breadcrumb.types";

export const Breadcrumb = forwardRef<
  HTMLElement,
  BreadcrumbProps
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    aria-label="Breadcrumb"
    className={cn(
      breadcrumbVariants(),
      className
    )}
    {...props}
  />
));

Breadcrumb.displayName = "Breadcrumb";