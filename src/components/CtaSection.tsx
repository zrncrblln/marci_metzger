import ctaBg from "@/assets/cta-bg.jpg";

const CtaSection = () => {
  return (
    <section id="subscribe" className="px-4 py-20">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaBg})` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6 py-12 max-w-xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs mb-6">
            Contact
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-3">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-white/70 text-sm mb-8">
            Get in touch with Marci Metzger Homes for expert real estate
            services in Pahrump, Nevada.
          </p>

          <a
            href="tel:(206) 919-6886"
            className="inline-flex px-8 py-3 rounded-full bg-foreground text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            CALL NOW
          </a>

          <p className="text-white/60 text-xs mt-8">
            Over two decades of real estate experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
