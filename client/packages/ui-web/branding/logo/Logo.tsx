import { forwardRef } from "react";

import { cn } from "@repo/utils";

import {
  logoVariants,
  logoImageVariants,
  logoTextVariants,
} from "./Logo.styles";

import type { LogoProps } from "./Logo.types";

export const Logo = forwardRef<
  HTMLDivElement,
  LogoProps
>(
  (
    {
      className,
      src,
      alt,
      title,
      subtitle,
      size,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        logoVariants({ size }),
        className
      )}
      {...props}
    >
      <img
        src={src}
        alt={alt ?? title}
        className={logoImageVariants({ size })}
      />

      <div>
        <h3 className={logoTextVariants({ size })}>
          {title}
        </h3>

        {subtitle && (
          <p className="text-xs text-text-muted">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
);

Logo.displayName = "Logo";