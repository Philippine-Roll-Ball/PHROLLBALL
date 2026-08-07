"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { cn } from "@repo/utils";

import {
  mobileMenuOverlayVariants,
  mobileMenuContentVariants,
} from "./MobileMenu.styles";

export function MobileMenuContent({
  className,
  children,
}: Dialog.DialogContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay
        className={mobileMenuOverlayVariants()}
      />

      <Dialog.Content
        className={cn(
          mobileMenuContentVariants(),
          className
        )}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}