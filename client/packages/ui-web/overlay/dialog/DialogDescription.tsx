import { cn } from "@repo/utils";

import { dialogDescriptionVariants } from "./Dialog.styles";

import { DialogDescriptionProps } from "./Dialog.types";

export function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps) {
  return (
    <p
      className={cn(
        dialogDescriptionVariants(),
        className
      )}
      {...props}
    />
  );
}