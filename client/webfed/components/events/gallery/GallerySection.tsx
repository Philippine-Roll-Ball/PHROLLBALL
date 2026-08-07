import {
  Container,
  H2,
  Section,
} from "@repo/ui-web";

import { GalleryCard } from "./GalleryCard";

const images = [
  {
    image: "/images/gallery/gallery-1.jpg",
    alt: "Gallery 1",
    height: "h-72",
  },
  {
    image: "/images/gallery/gallery-2.jpg",
    alt: "Gallery 2",
    height: "h-44",
  },
  {
    image: "/images/gallery/gallery-3.jpg",
    alt: "Gallery 3",
    height: "h-56",
  },
  {
    image: "/images/gallery/gallery-4.jpg",
    alt: "Gallery 4",
    height: "h-80",
  },
  {
    image: "/images/gallery/gallery-5.jpg",
    alt: "Gallery 5",
    height: "h-44",
  },
  {
    image: "/images/gallery/gallery-6.jpg",
    alt: "Gallery 6",
    height: "h-72",
  },
  {
    image: "/images/gallery/gallery-7.jpg",
    alt: "Gallery 7",
    height: "h-56",
  },
  {
    image: "/images/gallery/gallery-8.jpg",
    alt: "Gallery 8",
    height: "h-80",
  },
];

export function GallerySection() {
  return (
    <Section id="gallery">

      <Container>

        <H2 className="mb-10">
          Action Gallery
        </H2>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

          {images.map((item) => (
            <GalleryCard
              key={item.image}
              image={item.image}
              alt={item.alt}
              className={item.height}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}