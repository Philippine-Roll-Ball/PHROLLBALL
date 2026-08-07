import { cva } from "class-variance-authority";

export const radioVariants =cva(
    [
    "border-border",
    "text-primary",
    "accent-primary",
    "transition-colors",
    "focus:ring-2 focus:ring-primary/20",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    ],
      {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },

    defaultVariants: {
      size: "md",
    },
  }
);