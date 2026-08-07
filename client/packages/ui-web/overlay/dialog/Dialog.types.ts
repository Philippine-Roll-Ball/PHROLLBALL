import { HTMLAttributes } from "react";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface DialogContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DialogHeaderProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DialogFooterProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DialogTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {}

export interface DialogDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}