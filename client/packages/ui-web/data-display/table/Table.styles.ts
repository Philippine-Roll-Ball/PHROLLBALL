import { cva } from "class-variance-authority";

export const tableVariants = cva(
  "w-full caption-bottom text-sm"
);

export const tableRowVariants = cva(
  "border-b border-border transition-colors hover:bg-muted/50"
);

export const tableHeadVariants = cva(
  "h-12 px-4 text-left align-middle font-semibold text-text"
);

export const tableCellVariants = cva(
  "p-4 align-middle"
);

export const tableHeaderVariants = cva(
  "border-b border-border"
);

export const tableFooterVariants = cva(
  "border-t border-border bg-muted font-medium"
);

export const tableCaptionVariants = cva(
  "mt-4 text-sm text-text-muted"
);