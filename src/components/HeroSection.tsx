import heroVilla from "@/assets/hero-villa.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroVilla})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-24">
        <p className="text-sm tracking-wider text-white/80 mb-4">Modern Luxury Residence</p>
        <h1 className="font-heading text-5xl md:text-7xl leading-tight text-white mb-6">
          Exceptional living Starts Now
        </h1>
        <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-8">
          Contemporary architecture, prime locations, and upscale home design to inspire your next journey.
        </p>
        <a
          href="#properties"
          className="inline-flex px-8 py-3 rounded-full bg-background text-foreground text-sm font-medium hover:bg-secondary transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
