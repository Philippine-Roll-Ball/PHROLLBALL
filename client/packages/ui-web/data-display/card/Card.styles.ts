import { cva } from "class-variance-authority";

export const cardVariants = cva(
  [
    "rounded-lg",
    "border",
    "border-border",
    "bg-surface",
    "transition-all",
    "duration-200",
  ],
  {
    variants: {
      variant: {
        default: "shadow-sm",
        outlined: "shadow-none",
        elevated: "shadow-lg",
      },

      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);