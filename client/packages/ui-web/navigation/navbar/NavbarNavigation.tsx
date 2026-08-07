import { forwardRef } from "react";

import { cn } from "@repo/utils";

import {
  navbarNavigationVariants,
} from "./Navbar.styles";

export const NavbarNavigation = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  (
    {
      className,
      ...props
    },
    ref
  ) => (
    <nav
      ref={ref}
      className={cn(
        navbarNavigationVariants(),
        className
      )}
      {...props}
    />
  )
);

NavbarNavigation.displayName =
  "NavbarNavigation";