"use client";

import { forwardRef } from "react";

import { cn } from "@repo/utils";

import {
  switchVariants,
  switchThumbVariants,
} from "./Switch.styles";

import type { SwitchProps } from "./Switch.types";

export const Switch = forwardRef<
  HTMLInputElement,
  SwitchProps
>(
  (
    {
      className,
      size,
      checked,
      label,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const translate =
      checked
        ? size === "sm"
          ? "translate-x-4"
          : size === "lg"
          ? "translate-x-7"
          : "translate-x-5"
        : "";

    return (
      <label
        htmlFor={id}
        className="inline-flex items-center gap-3 cursor-pointer"
      >
        <span
          className={cn(
            switchVariants({ size }),
            checked ? "bg-primary" : "bg-border",
            className
          )}
        >
          <input
            ref={ref}
            id={id}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            className="sr-only"
            {...props}
          />

          <span
            className={cn(
              switchThumbVariants({ size }),
              translate
            )}
          />
        </span>

        {label && (
          <span className="text-sm text-text">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = "Switch";