import { ReactNode } from "react";

export interface CarouselProps {
  children: ReactNode;
  className?: string;

  loop?: boolean;
  autoplay?: boolean;
  delay?: number;

  slidesPerView?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

export interface CarouselItemProps {
  children: ReactNode;
  className?: string;
}