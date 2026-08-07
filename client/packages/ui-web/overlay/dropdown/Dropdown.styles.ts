import { cva } from "class-variance-authority";

export const dropdownContentVariants = cva(
  [
    "z-50 min-w-[12rem]",
    "rounded-lg border border-border",
    "bg-surface shadow-lg",
    "p-1",
    "animate-in fade-in zoom-in-95",
  ]
);

export const dropdownItemVariants = cva(
  [
    "flex cursor-pointer items-center gap-2",
    "rounded-md px-3 py-2 text-sm",
    "outline-none",
    "transition-colors",
    "hover:bg-muted",
    "focus:bg-muted",
    "data-[disabled]:pointer-events-none",
    "data-[disabled]:opacity-50",
  ]
);

export const dropdownLabelVariants = cva(
  "px-3 py-2 text-xs font-semibold text-text-muted"
);

export const dropdownSeparatorVariants = cva(
  "my-1 h-px bg-border"
);