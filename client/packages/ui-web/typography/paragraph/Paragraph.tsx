import { forwardRef } from "react";
import { cn } from "@repo/utils";

import { paragraphVariants } from "./Paragraph.styles";
import type { ParagraphProps } from "./Parangraph.types";

export const Paragraph = forwardRef<
  HTMLParagraphElement,
  ParagraphProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(paragraphVariants(), className)}
    {...props}
  />
));

Paragraph.displayName = "Paragraph";