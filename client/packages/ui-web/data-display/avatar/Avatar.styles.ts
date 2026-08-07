import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  [
    "inline-flex items-center justify-center",
    "overflow-hidden rounded-full",
    "bg-muted text-text font-medium",
    "select-none",
  ],
  {
    variants: {
      size: {
        xs: "h-8 w-8 text-xs",
        sm: "h-10 w-10 text-sm",
        md: "h-12 w-12 text-base",
        lg: "h-16 w-16 text-lg",
        xl: "h-20 w-20 text-xl",
      },
    },

    defaultVariants: {
      size: "md",
    },
  }
);

export const avatarImageVariants = cva([
  "h-full w-full object-cover",
]);