import { SelectHTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";

import { selectVariants } from "./Select.styles";

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {
  error?: boolean;
}