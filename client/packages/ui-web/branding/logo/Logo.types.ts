import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";

import { logoVariants } from "./Logo.styles";

export interface LogoProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoVariants> {
  src: string;
  alt?: string;
  title: string;
  subtitle?: string;
}