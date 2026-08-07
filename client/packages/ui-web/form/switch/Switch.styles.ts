import { cva } from "class-variance-authority";

export const switchVariants = cva(
  [
    "relative inline-flex shrink-0 cursor-pointer rounded-full",
    "transition-colors duration-200",
    "focus-within:ring-2 focus-within:ring-primary/20",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14",
      },
    },

    defaultVariants: {
      size: "md",
    },
  }
);

export const switchThumbVariants = cva(
  [
    "absolute left-0.5 top-0.5 rounded-full bg-white shadow-md transition-transform duration-200",
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