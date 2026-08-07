import { cva } from "class-variance-authority";

export const alertVariants = cva(
  [
    "relative w-full rounded-lg border p-4",
    "flex gap-3",
    "transition-colors",
  ],
  {
    variants: {
      variant: {
        info:
          "border-primary/20 bg-primary/10 text-primary",

        success:
          "border-success/20 bg-success/10 text-success",

        warning:
          "border-warning/20 bg-warning/10 text-warning",

        error:
          "border-error/20 bg-error/10 text-error",

        neutral:
          "border-border bg-surface text-text",
      },
    },

    defaultVariants: {
      variant: "neutral",
    },
  }
);

export const alertContentVariants = cva([
  "flex flex-col gap-1",
]);