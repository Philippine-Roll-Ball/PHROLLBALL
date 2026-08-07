import { ChevronRight } from "lucide-react";

import { cn } from "@repo/utils";

import { breadcrumbSeparatorVariants } from "./Breadcrumb.styles";

import type { BreadcrumbSeparatorProps } from "./Breadcrumb.types";

export function BreadcrumbSeparator({
  className,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        breadcrumbSeparatorVariants(),
        className
      )}
      {...props}
    >
      <ChevronRight size={16} />
    </span>
  );
}