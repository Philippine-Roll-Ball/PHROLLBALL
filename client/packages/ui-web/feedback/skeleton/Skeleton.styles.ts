import { cva } from "class-variance-authority";

export const skeletonVariants = cva(
  [
    "animate-pulse rounded-md bg-muted",
  ],
  {
    variants: {
      variant: {
        default: "",
        circle: "rounded-full",
      },

      animation: {
        pulse: "animate-pulse",
        none: "",
      },
    },

    defaultVariants: {
      variant: "default",
      animation: "pulse",
    },
  }
);