import { forwardRef } from "react";

import { cn } from "@repo/utils";

import {
  navbarActionsVariants,
} from "./Navbar.styles";

export const NavbarActions = forwardRef<
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
        navbarActionsVariants(),
        className
      )}
      {...props}
    />
  )
);

NavbarActions.displayName =
  "NavbarActions";