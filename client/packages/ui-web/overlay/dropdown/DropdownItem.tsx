"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { cn } from "@repo/utils";

import { dropdownItemVariants } from "./Dropdown.styles";

export function DropdownItem({
  className,
  ...props
}: DropdownMenu.DropdownMenuItemProps) {
  return (
    <DropdownMenu.Item
      className={cn(
        dropdownItemVariants(),
        className
      )}
      {...props}
    />
  );
}