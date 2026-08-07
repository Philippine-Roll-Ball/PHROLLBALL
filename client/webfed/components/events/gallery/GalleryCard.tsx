import Image from "next/image";

import { Card } from "@repo/ui-web";

interface GalleryCardProps {
  image: string;
  alt: string;
  className?: string;
}

export function GalleryCard({
  image,
  alt,
  className,
}: GalleryCardProps) {
  return (
    <Card className={`group overflow-hidden p-0 ${className ?? ""}`}>
      <div className="relative h-full w-full">

        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

      </div>
    </Card>
  );
}