import { TextareaHTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";

import { textareaVariants } from "./Textarea.styles";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  error?: boolean;
}