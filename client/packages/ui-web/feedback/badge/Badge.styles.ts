import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "font-medium",
    "transition-colors duration-200",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white",

        secondary:
          "bg-secondary text-white",

        success:
          "bg-success text-white",

        warning:
          "bg-warning text-white",

        error:
          "bg-error text-white",

        outline:
          "border border-border bg-transparent text-text",

        muted:
          "bg-muted text-text",
      },

      size: {
        sm: "px-2 py-0.5 text-xs",

        md: "px-3 py-1 text-sm",

        lg: "px-4 py-1.5 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);