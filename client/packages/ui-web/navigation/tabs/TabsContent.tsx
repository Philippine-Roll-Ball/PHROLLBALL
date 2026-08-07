"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@repo/utils";

import { tabsContentVariants } from "./Tabs.styles";

export function TabsContent({
  className,
  ...props
}: TabsPrimitive.TabsContentProps) {
  return (
    <TabsPrimitive.Content
      className={cn(
        tabsContentVariants(),
        className
      )}
      {...props}
    />
  );
}