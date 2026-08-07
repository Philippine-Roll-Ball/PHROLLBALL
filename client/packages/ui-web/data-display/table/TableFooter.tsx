import { forwardRef } from "react";
import { cn } from "@repo/utils";
import { tableFooterVariants } from "./Table.styles";
import type { TableFooterProps } from "./Table.types";

export const TableFooter = forwardRef<
HTMLTableSectionElement,
TableFooterProps
>(({className,...props},ref)=>(
<tfoot
ref={ref}
className={cn(tableFooterVariants(),className)}
{...props}
/>
));

TableFooter.displayName="TableFooter";