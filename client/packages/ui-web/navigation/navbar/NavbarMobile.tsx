import { forwardRef } from "react";

import { cn } from "@repo/utils";

import {
  navbarMobileVariants,
} from "./Navbar.styles";

export const NavbarMobile = forwardRef<
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
    <div
      ref={ref}
      className={cn(
        navbarMobileVariants(),
        className
      )}
      {...props}
    />
  )
);

NavbarMobile.displayName =
  "NavbarMobile";