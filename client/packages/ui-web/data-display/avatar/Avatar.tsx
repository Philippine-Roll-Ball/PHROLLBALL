"use client";

import { useState } from "react";

import { cn } from "@repo/utils";

import {
  avatarImageVariants,
  avatarVariants,
} from "./Avatar.styles";

import type { AvatarProps } from "./Avatar.types";

export function Avatar({
  className,
  size,
  src,
  alt,
  fallback,
  ...props
}: AvatarProps) {
  const [error, setError] = useState(false);

  return (
    <div
      className={cn(
        avatarVariants({ size }),
        className
      )}
      {...props}
    >
      {src && !error ? (
        <img
          src={src}
          alt={alt}
          className={avatarImageVariants()}
          onError={() => setError(true)}
        />
      ) : (
        <span>
          {fallback ??
            alt
              ?.split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
        </span>
      )}
    </div>
  );
}