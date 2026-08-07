import { cn } from "@repo/utils";

import {
  mobileMenuBodyVariants,
} from "./MobileMenu.styles";

export function MobileMenuBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        mobileMenuBodyVariants(),
        className
      )}
      {...props}
    />
  );
}