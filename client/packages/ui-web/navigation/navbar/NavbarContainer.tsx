import { forwardRef } from "react";

import { cn } from "@repo/utils";

import {
  navbarContainerVariants,
} from "./Navbar.styles";

export const NavbarContainer = forwardRef<
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
        navbarContainerVariants(),
        className
      )}
      {...props}
    />
  )
);

NavbarContainer.displayName =
  "NavbarContainer";