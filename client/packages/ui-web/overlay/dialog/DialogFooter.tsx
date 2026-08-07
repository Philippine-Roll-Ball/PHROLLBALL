import { cn } from "@repo/utils";

import { dialogFooterVariants } from "./Dialog.styles";

import { DialogFooterProps } from "./Dialog.types";

export function DialogFooter({
  className,
  ...props
}: DialogFooterProps) {
  return (
    <div
      className={cn(
        dialogFooterVariants(),
        className
      )}
      {...props}
    />
  );
}