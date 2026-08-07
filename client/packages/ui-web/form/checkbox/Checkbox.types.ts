import { InputHTMLAttributes } from "react";
import { VariantProps  } from "class-variance-authority";

import { checkboxVariants } from "./Checkbox.styles";

export interface CheckboxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    VariantProps<typeof checkboxVariants> {
  label?: string;
}