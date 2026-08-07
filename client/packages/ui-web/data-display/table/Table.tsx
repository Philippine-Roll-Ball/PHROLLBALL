import { forwardRef } from "react";

import { cn } from "@repo/utils";
import { tableVariants } from "./Table.styles";
import type { TableProps } from "./Table.types";

export const Table = forwardRef<
    HTMLTableElement,
    TableProps
>(({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
        <table
            ref={ref}
            className={cn(tableVariants(), className)}
            {...props}
        />
    </div>
));

Table.displayName = "Table";