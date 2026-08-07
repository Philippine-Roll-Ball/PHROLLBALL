import { forwardRef } from "react";

import { cn } from "@repo/utils";

import {
  breadcrumbItemVariants,
  breadcrumbCurrentVariants,
} from "./Breadcrumb.styles";

import type { BreadcrumbItemProps } from "./Breadcrumb.types";

export const BreadcrumbItem = forwardRef<
  HTMLAnchorElement,
  BreadcrumbItemProps
>(
  (
    {
      className,
      current,
      ...props
    },
    ref
  ) => (
    <a
      ref={ref}
      aria-current={
        current ? "page" : undefined
      }
      className={cn(
        current
          ? breadcrumbCurrentVariants()
          : breadcrumbItemVariants(),
        className
      )}
      {...props}
    />
  )
);

BreadcrumbItem.displayName =
  "BreadcrumbItem";