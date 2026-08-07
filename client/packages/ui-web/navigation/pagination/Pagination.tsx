"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@repo/utils";

import {
  paginationVariants,
  paginationButtonVariants,
} from "./Pagination.styles";

import type { PaginationProps } from "./Pagination.types";

export function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  return (
    <div
      className={cn(
        paginationVariants(),
        className
      )}
    >
      <button
        className={paginationButtonVariants()}
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft size={18} />
      </button>

      {Array.from(
        { length: totalPages },
        (_, index) => (
          <button
            key={index}
            className={paginationButtonVariants({
              variant:
                page === index + 1
                  ? "active"
                  : "default",
            })}
            onClick={() =>
              onPageChange(index + 1)
            }
          >
            {index + 1}
          </button>
        )
      )}

      <button
        className={paginationButtonVariants()}
        disabled={page === totalPages}
        onClick={() =>
          onPageChange(page + 1)
        }
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}