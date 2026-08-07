import { forwardRef } from "react";
import { cn } from "@repo/utils";
import { tableRowVariants } from "./Table.styles";
import type { TableRowProps } from "./Table.types";

export const TableRow = forwardRef<
HTMLTableRowElement,
TableRowProps
>(({className,...props},ref)=>(
<tr
ref={ref}
className={cn(tableRowVariants(),className)}
{...props}
/>
));

TableRow.displayName="TableRow";