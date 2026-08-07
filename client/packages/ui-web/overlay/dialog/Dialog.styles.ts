import { cva } from "class-variance-authority";

export const dialogOverlayVariants = cva([
  "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
]);

export const dialogContentVariants = cva([
  "fixed left-1/2 top-1/2 z-50",
  "w-full max-w-lg -translate-x-1/2 -translate-y-1/2",
  "rounded-xl border border-border bg-surface shadow-lg",
  "p-6",
]);

export const dialogHeaderVariants = cva(
  "flex flex-col gap-2"
);

export const dialogFooterVariants = cva(
  "mt-6 flex justify-end gap-2"
);

export const dialogTitleVariants = cva(
  "text-xl font-semibold text-text"
);

export const dialogDescriptionVariants = cva(
  "text-sm text-text-muted"
);