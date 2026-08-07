import {cn } from "@repo/utils"



interface CarouselItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CarouselItem({
  children,
  className,
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