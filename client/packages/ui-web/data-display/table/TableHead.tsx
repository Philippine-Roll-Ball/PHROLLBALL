import { forwardRef } from "react";
import { cn } from "@repo/utils";
import { tableHeadVariants } from "./Table.styles";
import type { TableHeadProps } from "./Table.types";

export const TableHead = forwardRef<
HTMLTableCellElement,
TableHeadProps
>(({className,...props},ref)=>(
<th
ref={ref}
className={cn(tableHeadVariants(),className)}
{...props}
/>
));

TableHead.displayName="TableHead";