import { cva } from "class-variance-authority";

export const textareaVariants = cva(
  [
    "flex w-full rounded-lg border bg-surface",
    "px-4 py-3",
    "text-text placeholder:text-text-muted",
    "transition-colors duration-200",
    "outline-none",
    "resize-y",
    "min-h-28",
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

      error: {
        true: "border-error focus:border-error focus:ring-error/20",
      },
    },

    defaultVariants: {
      variant: "default",
      error: false,
    },
  }
);