import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-lg font-medium transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-primary",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary:
           "bg-primary text-white hover:bg-primary-hover",

        secondary:
          "bg-secondary text-white hover:bg-secondary-hover",

        outline:
          "border border-primary text-primary hover:bg-primary hover:text-white",

        ghost:
          "hover:bg-muted",

        danger:
          "bg-error text-white hover:brightness-95",
      },

      size: {
        xs: "h-8 px-3 text-xs",

        sm: "h-9 px-4 text-sm",

        md: "h-11 px-5 text-base",

        lg: "h-12 px-6 text-lg",

        icon: "h-11 w-11",
      },

      fullWidth: {
        true: "w-full",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);