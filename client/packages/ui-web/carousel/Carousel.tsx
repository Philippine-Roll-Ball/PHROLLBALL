"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@repo/utils";

type EmblaApi = ReturnType<typeof useEmblaCarousel>[1];

interface CarouselContextValue {
  emblaApi: EmblaApi;

  scrollPrev: () => void;
  scrollNext: () => void;

  canScrollPrev: boolean;
  canScrollNext: boolean;

  selectedIndex: number;
  scrollSnaps: number[];
}

const CarouselContext =
  React.createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error(
      "Carousel components must be used inside <Carousel />"
    );
  }

  return context;
}

export interface CarouselProps {
  children: React.ReactNode;

  className?: string;

  loop?: boolean;

  autoplay?: boolean;

  delay?: number;
}

export function Carousel({
  children,
  className,
  loop = true,
  autoplay = true,
  delay = 4000,
}: CarouselProps) {
  const autoplayPlugin = React.useRef(
    Autoplay({
      delay,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      align: "start",
    },
    autoplay ? [autoplayPlugin.current] : []
  );

  const [canScrollPrev, setCanScrollPrev] =
    React.useState(false);

  const [canScrollNext, setCanScrollNext] =
    React.useState(false);

  const [selectedIndex, setSelectedIndex] =
    React.useState(0);

  const [scrollSnaps, setScrollSnaps] =
    React.useState<number[]>([]);

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
    autoplayPlugin.current.reset();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
    autoplayPlugin.current.reset();
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());

      setCanScrollNext(emblaApi.canScrollNext());

      setSelectedIndex(
        emblaApi.selectedScrollSnap()
      );
    };

    setScrollSnaps(
      emblaApi.scrollSnapList()
    );

    onSelect();

    emblaApi.on("select", onSelect);

    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);

      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

 return (
  <CarouselContext.Provider
    value={{
      emblaApi,
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
      selectedIndex,
      scrollSnaps,
    }}
  >
    <div
      tabIndex={0}
      className={cn("relative outline-none", className)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") scrollPrev();
        if (e.key === "ArrowRight") scrollNext();
      }}
    >
      <div
        ref={viewportRef}
        className="
          overflow-hidden
          cursor-grab
          active:cursor-grabbing
        "
      >
        {children}
      </div>

      <CarouselPrevious />
      <CarouselNext />
      <CarouselPagination />
    </div>
  </CarouselContext.Provider>
);
}
export interface CarouselContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function CarouselContent({
  className,
  children,
  ...props
}: CarouselContentProps) {
  return (
    <div
      className={cn(
        "flex -ml-4 touch-pan-y",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CarouselItemProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function CarouselItem({
  className,
  children,
  ...props
}: CarouselItemProps) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CarouselPrevious() {
  const {
    scrollPrev,
    canScrollPrev,
  } = useCarousel();

  return (
    <button
      type="button"
      aria-label="Previous slide"
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      className={cn(
        "absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary p-2 shadow-lg transition-all",
        "hover:scale-105 hover:bg-gray-100 hover:text-black",
        "disabled:pointer-events-none disabled:opacity-40"
      )}
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
  );
}

export function CarouselNext() {
  const {
    scrollNext,
    canScrollNext,
  } = useCarousel();

  return (
    <button
      type="button"
      aria-label="Next slide"
      disabled={!canScrollNext}
      onClick={scrollNext}
      className={cn(
        "absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary p-2 shadow-lg transition-all",
        "hover:scale-105 hover:bg-gray-100 hover:text-black",
        "disabled:pointer-events-none disabled:opacity-40"
      )}
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  );
}

export function CarouselPagination() {
  const {
    emblaApi,
    selectedIndex,
    scrollSnaps,
  } = useCarousel();

  if (!scrollSnaps.length) return null;

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => emblaApi?.scrollTo(index)}
          className={cn(
            "h-2.5 w-2.5 rounded-full transition-all duration-300",
            selectedIndex === index
              ? "w-8 bg-primary"
              : "bg-gray-300 hover:bg-gray-400"
          )}
        />
      ))}
    </div>
  );
}