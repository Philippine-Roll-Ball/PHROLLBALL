import { cva } from "class-variance-authority";

export const spinnerVariants = cva(
  [
    "inline-block animate-spin rounded-full border-current border-solid border-r-transparent",
  ],
  {
    variants: {
      size: {
        xs: "h-3 w-3 border",
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-2",
        lg: "h-8 w-8 border-[3px]",
        xl: "h-10 w-10 border-4",
      },

      variant: {
        primary: "text-primary",
        secondary: "text-secondary",
        white: "text-white",
        success: "text-success",
        warning: "text-warning",
        error: "text-error",
      },
    },

    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  }
);