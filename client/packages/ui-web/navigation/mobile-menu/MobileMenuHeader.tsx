import { cn } from "@repo/utils";

import {
  mobileMenuHeaderVariants,
} from "./MobileMenu.styles";

export function MobileMenuHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        mobileMenuHeaderVariants(),
        className
      )}
      {...props}
    />
  );
}