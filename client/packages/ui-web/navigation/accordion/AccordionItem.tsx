"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@repo/utils";

import { accordionItemVariants } from "./Accordion.styles";

export function AccordionItem({
  className,
  ...props
}: AccordionPrimitive.AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        accordionItemVariants(),
        className
      )}
      {...props}
    />
  );
}