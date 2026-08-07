import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";

import { alertVariants } from "./Alert.styles";

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export interface AlertTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {}

export interface AlertDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}