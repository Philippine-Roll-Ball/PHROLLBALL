import { forwardRef } from "react";
import { cn } from "@repo/utils";
import { tableCellVariants } from "./Table.styles";
import type { TableCellProps } from "./Table.types";

export const TableCell = forwardRef<
HTMLTableCellElement,
TableCellProps
>(({className,...props},ref)=>(
<td
ref={ref}
className={cn(tableCellVariants(),className)}
{...props}
/>
));

TableCell.displayName="TableCell";