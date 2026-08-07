import { HTMLAttributes, LabelHTMLAttributes } from "react";

export interface FormFieldProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface FormLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export interface FormHelperTextProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export interface FormErrorMessageProps
  extends HTMLAttributes<HTMLParagraphElement> {}