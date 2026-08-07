import { cva } from "class-variance-authority";

export const h1Variants = cva(
  "font-bold tracking-tight text-text",
  {
    variants: {
      gradient: {
        true: "text-gradient",
        false: "",
      },
    },
    defaultVariants: {
      gradient: false,
    },
  }
);