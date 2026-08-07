import { cva } from "class-variance-authority";

export const sectionVariants = cva("", {
  variants: {
    spacing: {
      none: "",
      sm: "py-8",
      md: "py-12",
      lg: "py-16",
      xl: "py-24",
    },
  },
  defaultVariants: {
    spacing: "lg",
  },
});