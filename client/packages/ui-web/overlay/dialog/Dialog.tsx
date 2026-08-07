"use client";

import { createPortal } from "react-dom";

import {
  dialogContentVariants,
  dialogOverlayVariants,
} from "./Dialog.styles";

import { cn } from "@repo/utils";
import type { DialogProps } from "./Dialog.types";

export function Dialog({
  open,
  onClose,
  children,
}: DialogProps) {
  if (!open) return null;

  return createPortal(
    <>
      <div
        className={dialogOverlayVariants()}
        onClick={onClose}
      />

      <div
        className={cn(dialogContentVariants())}
      >
        {children}
      </div>
    </>,
    document.body
  );
}