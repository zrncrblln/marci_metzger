import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

type Props = {
  images: string[];
};

export default function ImageShowcase({ images }: Props) {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = useCallback(
    (dir: number) => {
      setIndex((prev) => {
        const [currentIndex] = prev;
        const newIndex = (currentIndex + dir + images.length) % images.length;
        return [newIndex, dir];
      });
    },
    [images.length],
  );

  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 140 : -140,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 140 : -140,
      opacity: 0,
      scale: 0.97,
    }),
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        paginate(1);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered, paginate]);

  return (
    <div className="w-full bg-white py-5 flex justify-center overflow-hidden">
      <div
        className="relative w-full max-w-[900px] px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* LEFT PREVIEW */}
        <Card className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 w-28 h-[140px] rounded-2xl overflow-hidden opacity-70 shadow-xl p-0 border-0">
          <img src={images[prevIndex]} className="w-full h-full object-cover" />
        </Card>

        {/* RIGHT PREVIEW */}
        <Card className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 w-28 h-[140px] rounded-2xl overflow-hidden opacity-70 shadow-xl p-0 border-0">
          <img src={images[nextIndex]} className="w-full h-full object-cover" />
        </Card>

        {/* MAIN FLOATING CARD */}
        <div className="relative overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,0.18)] bg-white h-[280px] md:h-[320px] lg:h-[360px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
              }}
              className="absolute inset +1"
            >
              <img
                src={images[index]}
                className="w-full h-full object-cover select-none rounded-[20px]"
              />
            </motion.div>
          </AnimatePresence>

          {/* NAV ARROWS */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md px-4 py-2 rounded-xl shadow-md hover:bg-white"
          >
            ‹
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md px-4 py-2 rounded-xl shadow-md hover:bg-white"
          >
            ›
          </button>
        </div>

        {/* DOT NAVIGATION */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              className={`transition-all rounded-full ${
                i === index
                  ? "w-7 h-2 bg-neutral-800"
                  : "w-2 h-2 bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
