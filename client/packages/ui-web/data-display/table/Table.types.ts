import {
    HTMLAttributes,
    TableHTMLAttributes,
    TdHTMLAttributes,
    ThHTMLAttributes
} from "react";

export interface TableProps
    extends TableHTMLAttributes<HTMLTableElement> {}

export interface TableHeaderProps
    extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableBodyProps
    extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableFooterProps
    extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableRowProps
    extends HTMLAttributes<HTMLTableRowElement> {}

export interface TableHeadProps
    extends ThHTMLAttributes<HTMLTableCellElement> {}

export interface TableCellProps
    extends TdHTMLAttributes<HTMLTableCellElement> {}

export interface TableCaptionProps
    extends HTMLAttributes<HTMLTableCaptionElement> {}