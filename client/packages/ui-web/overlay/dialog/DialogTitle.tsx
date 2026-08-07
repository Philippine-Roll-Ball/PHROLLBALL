import { cn } from "@repo/utils";

import { dialogTitleVariants } from "./Dialog.styles";

import { DialogTitleProps } from "./Dialog.types";

export function DialogTitle({
  className,
  ...props
}: DialogTitleProps) {
  return (
    <h2
      className={cn(
        dialogTitleVariants(),
        className
      )}
      {...props}
    />
  );
}