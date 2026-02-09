import heroCarousel from "@/assets/hero-carousel.jpg";

const ImageShowcase = () => {
  return (
    <section className="px-4 pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl overflow-hidden">
          <img
            src={heroCarousel}
            alt="Modern luxury villa showcase"
            className="w-full h-[400px] md:h-[550px] object-cover"
          />
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-muted-foreground" />
          <div className="w-2 h-2 rounded-full bg-border" />
          <div className="w-2 h-2 rounded-full bg-border" />
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
