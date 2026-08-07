import { forwardRef } from "react";
import { cn } from "@repo/utils";

import { sectionVariants } from "./Section.styles";
import type { SectionProps } from "./Section.types";

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ spacing }), className)}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";