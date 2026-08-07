import { forwardRef } from "react";
import { cn } from "@repo/utils";
import { tableHeaderVariants } from "./Table.styles";
import type { TableHeaderProps } from "./Table.types";

export const TableHeader = forwardRef<
HTMLTableSectionElement,
TableHeaderProps
>(({className,...props},ref)=>(
<thead
ref={ref}
className={cn(tableHeaderVariants(),className)}
{...props}
/>
));

TableHeader.displayName="TableHeader";