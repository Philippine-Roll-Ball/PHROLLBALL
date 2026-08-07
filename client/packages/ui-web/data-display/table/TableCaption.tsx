import { forwardRef } from "react";
import { cn } from "@repo/utils";
import { tableCaptionVariants } from "./Table.styles";
import type { TableCaptionProps } from "./Table.types";

export const TableCaption = forwardRef<
HTMLTableCaptionElement,
TableCaptionProps
>(({className,...props},ref)=>(
<caption
ref={ref}
className={cn(tableCaptionVariants(),className)}
{...props}
/>
));

TableCaption.displayName="TableCaption";