import { InputHTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";

import { radioVariants } from "./Radio.styles";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size">,
    VariantProps<typeof radioVariants> {
  label?: string;
}