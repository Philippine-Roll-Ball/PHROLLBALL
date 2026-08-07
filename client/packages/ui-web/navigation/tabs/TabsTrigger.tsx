"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@repo/utils";

import { tabsTriggerVariants } from "./Tabs.styles";

export function TabsTrigger({
  className,
  ...props
}: TabsPrimitive.TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        tabsTriggerVariants(),
        className
      )}
      {...props}
    />
  );
}