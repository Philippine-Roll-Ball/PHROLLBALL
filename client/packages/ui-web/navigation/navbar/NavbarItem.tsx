import { forwardRef } from "react";

import { cn } from "@repo/utils";

import {
  navbarItemVariants,
} from "./Navbar.styles";

import type {
  NavbarItemProps,
} from "./Navbar.types";

export const NavbarItem = forwardRef<
  HTMLAnchorElement,
  NavbarItemProps
>(
  (
    {
      className,
      active,
      ...props
    },
    ref
  ) => (
    <a
      ref={ref}
      className={cn(
        navbarItemVariants({
          active,
        }),
        className
      )}
      {...props}
    />
  )
);

NavbarItem.displayName =
  "NavbarItem";