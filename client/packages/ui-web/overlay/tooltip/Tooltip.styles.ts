import { cva } from "class-variance-authority";

export const tooltipContentVariants = cva(
  [
    "z-50 overflow-hidden rounded-md",
    "border border-border",
    "bg-surface px-3 py-1.5",
    "text-sm text-text",
    "shadow-lg",
    "animate-in fade-in zoom-in-95",
  ],
  {
    variants: {
      variant: {
        default: "",
        inverted: "bg-text text-surface border-text",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);