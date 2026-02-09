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
            Subscribe
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-3">
            Where your vision Find Its Home
          </h2>
          <p className="text-white/70 text-sm mb-8">
            Mivar offers more than just a place to live
          </p>

          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full p-1.5 max-w-md mx-auto">
            <input
              type="email"
              placeholder="JaneSmith@mail.com"
              className="flex-1 bg-transparent text-white placeholder:text-white/60 text-sm px-4 py-2 outline-none"
            />
            <button className="px-6 py-2.5 rounded-full bg-foreground text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
              Submit
            </button>
          </div>

          <p className="text-white/60 text-xs mt-8">
            Your Stay, Reimagined with Comfort and Care
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
