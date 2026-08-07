"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { cn } from "@repo/utils";

import { dropdownLabelVariants } from "./Dropdown.styles";

export function DropdownLabel({
  className,
  ...props
}: DropdownMenu.DropdownMenuLabelProps) {
  return (
    <DropdownMenu.Label
      className={cn(
        dropdownLabelVariants(),
        className
      )}
      {...props}
    />
  );
}