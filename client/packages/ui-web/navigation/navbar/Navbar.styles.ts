import { cva } from "class-variance-authority";

export const navbarVariants = cva(
  [
    "sticky top-0 z-50 w-full transition-all",
  ],
  {
    variants: {
      variant: {
        transparent:
          "bg-transparent",

        solid:
          "bg-surface border-b border-border",

        blur:
          "border-b border-border bg-surface/80 backdrop-blur-lg",
      },

      size: {
        sm: "h-14",
        md: "h-16",
        lg: "h-20",
      },
    },

    defaultVariants: {
      variant: "blur",
      size: "md",
    },
  }
);

export const navbarContainerVariants = cva(
  "mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8"
);

export const navbarNavigationVariants = cva(
  "hidden items-center gap-6 lg:flex"
);

export const navbarActionsVariants = cva(
  "hidden items-center gap-3 lg:flex"
);

export const navbarMobileVariants = cva(
  "flex lg:hidden"
);

export const navbarItemVariants = cva(
  [
    "text-sm font-medium",
    "transition-colors",
    "hover:text-primary",
  ],
  {
    variants: {
      active: {
        true: "text-primary",
        false: "text-text",
      },
    },

    defaultVariants: {
      active: false,
    },
  }
);