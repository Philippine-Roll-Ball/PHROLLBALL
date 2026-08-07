import {
  HTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

export interface BreadcrumbProps
  extends HTMLAttributes<HTMLElement> {}

export interface BreadcrumbItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  current?: boolean;
}

export interface BreadcrumbSeparatorProps
  extends HTMLAttributes<HTMLSpanElement> {}