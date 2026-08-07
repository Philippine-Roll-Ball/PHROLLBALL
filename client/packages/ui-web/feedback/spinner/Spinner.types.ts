import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";

import { spinnerVariants } from "./Spinner.styles";

export interface SpinnerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}