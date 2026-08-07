import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";

import { cardVariants } from "./Card.styles";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}