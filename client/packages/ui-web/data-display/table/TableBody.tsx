import { forwardRef } from "react";
import { cn } from "@repo/utils";
import type { TableBodyProps } from "./Table.types";

export const TableBody = forwardRef<
HTMLTableSectionElement,
TableBodyProps
>(({className,...props},ref)=>(
<tbody
ref={ref}
className={cn(className)}
{...props}
/>
));

TableBody.displayName="TableBody";