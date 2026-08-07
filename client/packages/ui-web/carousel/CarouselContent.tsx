import {cn } from "@repo/utils"

export function CarouselContent({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex touch-pan-y -ml-4",
        className
      )}
    >
      {children}
    </div>
  );
}