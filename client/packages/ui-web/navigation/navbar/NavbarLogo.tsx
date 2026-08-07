import { forwardRef } from "react";

export const NavbarLogo = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    ref={ref}
    className="flex items-center"
    {...props}
  />
));

NavbarLogo.displayName = "NavbarLogo";