import { cva } from "class-variance-authority";

export const accordionItemVariants = cva(
  "border-b border-border"
);

export const accordionTriggerVariants = cva([
  "flex w-full items-center justify-between",
  "py-4 text-left font-medium",
  "transition-all",
  "hover:text-primary",
  "[&[data-state=open]>svg]:rotate-180",
]);

export const accordionContentVariants = cva([
  "overflow-hidden text-sm",
  "data-[state=closed]:animate-accordion-up",
  "data-[state=open]:animate-accordion-down",
]);

export const accordionContentInnerVariants = cva(
  "pb-4 pt-1"
);