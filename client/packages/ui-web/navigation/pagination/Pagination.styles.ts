import { cva } from "class-variance-authority";

export const paginationVariants = cva(
  "flex items-center justify-center gap-2"
);

export const paginationButtonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-lg border transition-colors",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default:
          "border-border bg-surface hover:bg-muted",

        active:
          "border-primary bg-primary text-white",
      },

      size: {
        sm: "h-8 w-8 text-sm",
        md: "h-10 w-10",
        lg: "h-12 w-12 text-lg",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);