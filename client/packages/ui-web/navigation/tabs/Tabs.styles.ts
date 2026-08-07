import { cva } from "class-variance-authority";

export const tabsListVariants = cva(
  [
    "inline-flex h-10 items-center rounded-lg",
    "bg-muted p-1",
  ]
);

export const tabsTriggerVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-md px-3 py-1.5",
    "text-sm font-medium",
    "transition-all",
    "focus-visible:outline-none",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "data-[state=active]:bg-surface",
    "data-[state=active]:text-primary",
    "data-[state=active]:shadow-sm",
  ]
);

export const tabsContentVariants = cva(
  [
    "mt-4",
    "focus-visible:outline-none",
  ]
);