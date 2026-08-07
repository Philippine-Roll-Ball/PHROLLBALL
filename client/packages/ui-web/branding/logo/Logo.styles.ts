import { cva } from "class-variance-authority";

export const logoVariants = cva(
  "flex items-center gap-3",
  {
    variants: {
      size: {
        sm: "gap-2",
        md: "gap-3",
        lg: "gap-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const logoImageVariants = cva("", {
  variants: {
    size: {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const logoTextVariants = cva(
  "font-bold leading-tight",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);