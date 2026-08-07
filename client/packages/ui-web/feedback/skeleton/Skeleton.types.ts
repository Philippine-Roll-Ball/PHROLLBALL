import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";

import { skeletonVariants } from "./Skeleton.styles";

export interface SkeletonProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}