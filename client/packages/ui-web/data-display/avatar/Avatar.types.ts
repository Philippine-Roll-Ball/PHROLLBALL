import { HTMLAttributes, ImgHTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";

import { avatarVariants } from "./Avatar.styles";

export interface AvatarProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
}

export interface AvatarImageProps
  extends ImgHTMLAttributes<HTMLImageElement> {}

export interface AvatarFallbackProps
  extends HTMLAttributes<HTMLSpanElement> {}