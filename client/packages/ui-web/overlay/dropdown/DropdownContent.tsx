"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { cn } from "@repo/utils";

import { dropdownContentVariants } from "./Dropdown.styles";

export function DropdownContent({
  className,
  ...props
}: DropdownMenu.DropdownMenuContentProps) {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        sideOffset={8}
        className={cn(
          dropdownContentVariants(),
          className
        )}
        {...props}
      />
    </DropdownMenu.Portal>
  );
}