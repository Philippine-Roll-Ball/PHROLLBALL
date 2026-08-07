import { cn } from "@repo/utils";
import { dialogHeaderVariants } from "./Dialog.styles";
import { DialogHeaderProps } from "./Dialog.types";

export function DialogHeader({
  className,
  ...props
}: DialogHeaderProps) {
  return (
    <div
      className={cn(
        dialogHeaderVariants(),
        className
      )}
      {...props}
    />
  );
}