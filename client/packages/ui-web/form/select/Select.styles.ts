import { cva } from "class-variance-authority";

export const selectVariants = cva(
  [
    "flex w-full rounded-lg border bg-surface",
    "px-4 py-2.5",
    "text-text",
    "transition-colors duration-200",
    "outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default:
          "border-border focus:border-primary focus:ring-2 focus:ring-primary/20",

        filled:
          "border-transparent bg-muted focus:border-primary focus:ring-2 focus:ring-primary/20",

        flushed:
          "rounded-none border-0 border-b border-border bg-transparent px-0 focus:border-primary focus:ring-0",
      },

      size: {
        sm: "h-9 text-sm",
        md: "h-11 text-base",
        lg: "h-12 text-lg",
      },

      error: {
        true: "border-error focus:border-error focus:ring-error/20",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      error: false,
    },
  }
);