import { cva } from "class-variance-authority";

export const breadcrumbVariants = cva(
  "flex flex-wrap items-center gap-2 text-sm text-text-muted"
);

export const breadcrumbItemVariants = cva(
  "transition-colors hover:text-primary"
);

export const breadcrumbCurrentVariants = cva(
  "font-medium text-text"
);

export const breadcrumbSeparatorVariants = cva(
  "text-text-muted"
);