import { forwardRef } from "react";

import { cn } from "@repo/utils";

import {
  navbarVariants,
} from "./Navbar.styles";

import type {
  NavbarProps,
} from "./Navbar.types";

export const Navbar = forwardRef<
  HTMLElement,
  NavbarProps
>(
  (
    {
      className,
      variant,
      size,
      ...props
    },
    ref
  ) => (
    <header
      ref={ref}
      className={cn(
        navbarVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    />
  )
);

Navbar.displayName = "Navbar";