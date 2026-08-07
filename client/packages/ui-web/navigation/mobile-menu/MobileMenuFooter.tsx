import { cn } from "@repo/utils";

import {
  mobileMenuFooterVariants,
} from "./MobileMenu.styles";

export function MobileMenuFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        mobileMenuFooterVariants(),
        className
      )}
      {...props}
    />
  );
}