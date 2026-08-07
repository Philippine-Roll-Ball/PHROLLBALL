"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { cn } from "@repo/utils";

import { dropdownSeparatorVariants } from "./Dropdown.styles";

export function DropdownSeparator({
  className,
  ...props
}: DropdownMenu.DropdownMenuSeparatorProps) {
  return (
    <DropdownMenu.Separator
      className={cn(
        dropdownSeparatorVariants(),
        className
      )}
      {...props}
    />
  );
}