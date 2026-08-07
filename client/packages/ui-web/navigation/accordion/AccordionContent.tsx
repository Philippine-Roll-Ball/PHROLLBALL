"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@repo/utils";

import {
  accordionContentVariants,
  accordionContentInnerVariants,
} from "./Accordion.styles";

export function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        accordionContentVariants(),
        className
      )}
      {...props}
    >
      <div className={accordionContentInnerVariants()}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}