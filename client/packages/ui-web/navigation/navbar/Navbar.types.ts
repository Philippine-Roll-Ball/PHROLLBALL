import {
  HTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

import { VariantProps } from "class-variance-authority";

import {
  navbarVariants,
  navbarItemVariants,
} from "./Navbar.styles";

export interface NavbarProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {}

export interface NavbarContainerProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface NavbarLogoProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface NavbarNavigationProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface NavbarActionsProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface NavbarMobileProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface NavbarItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navbarItemVariants> {}