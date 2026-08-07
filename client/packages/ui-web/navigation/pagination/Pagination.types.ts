import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";

import {
  paginationButtonVariants,
} from "./Pagination.styles";

export interface PaginationProps
  extends HTMLAttributes<HTMLDivElement> {
  page: number;
  totalPages: number;
  onPageChange(page: number): void;
}

export interface PaginationButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof paginationButtonVariants> {}