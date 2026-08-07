"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@repo/utils";

import { tabsListVariants } from "./Tabs.styles";

export function TabsList({
  className,
  ...props
}: TabsPrimitive.TabsListProps) {
  return (
    <TabsPrimitive.List
      className={cn(
        tabsListVariants(),
        className
      )}
      {...props}
    />
  );
}