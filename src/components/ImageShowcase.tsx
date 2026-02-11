import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ImageShowcase = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const images = [
    {
      src: "/src/assets/c1.jpg",
      alt: "High resolution image c1 from Marci Metzger Homes",
    },
    {
      src: "/src/assets/c2.png",
      alt: "High resolution image c2 from Marci Metzger Homes",
    },
    {
      src: "/src/assets/c3.png",
      alt: "High resolution image c3 from Marci Metzger Homes",
    },
    {
      src: "/src/assets/c4.png",
      alt: "High resolution image c4 from Marci Metzger Homes",
    },
    {
      src: "/src/assets/c5.jpg",
      alt: "High resolution image c5 from Marci Metzger Homes",
    },
    {
      src: "/src/assets/c6.png",
      alt: "High resolution image c6 from Marci Metzger Homes",
    },
  ];

  return (
    <section className="px-4 pb-20">
      <div className="max-w-5xl mx-auto">
        <Carousel
          setApi={setApi}
          plugins={[Autoplay({ delay: 3000 })]}
          className="rounded-3xl overflow-hidden"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[400px] md:h-[550px] object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: count }, (_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                index + 1 === current ? "bg-muted-foreground" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
