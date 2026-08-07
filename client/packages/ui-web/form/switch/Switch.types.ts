import { InputHTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";

import {
  switchVariants,
  switchThumbVariants,
} from "./Switch.styles";

export interface SwitchProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "type" | "size"
    >,
    VariantProps<typeof switchVariants>,
    VariantProps<typeof switchThumbVariants> {
  label?: string;
}