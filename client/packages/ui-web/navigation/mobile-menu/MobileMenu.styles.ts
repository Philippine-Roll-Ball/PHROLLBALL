import { cva } from "class-variance-authority";

export const mobileMenuOverlayVariants = cva(
  "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
);

export const mobileMenuContentVariants = cva([
  "fixed right-0 top-0 z-50",
  "h-screen w-80 max-w-[90vw]",
  "border-l border-border",
  "bg-surface shadow-xl",
  "flex flex-col",
]);

export const mobileMenuHeaderVariants = cva(
  "border-b border-border p-4"
);

export const mobileMenuBodyVariants = cva(
  "flex-1 overflow-y-auto p-4"
);

export const mobileMenuFooterVariants = cva(
  "border-t border-border p-4"
);