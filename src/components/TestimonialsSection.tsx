import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Immerse yourself in a world where luxury meets sustainability, offering a seamless blend of comfort and innovation.",
    name: "Henki",
    role: "Customers",
  },
  {
    text: "Explore a space where elegance and sustainability harmonize, offering a unique blend of comfort and cutting-edge design.",
    name: "Leopas",
    role: "Artist",
  },
  {
    text: "Dive into a realm where opulence and eco-friendliness coexist, creating a perfect harmony of comfort and cutting-edge design.",
    name: "Wedly",
    role: "Ceo Founder",
  },
  {
    text: "Experience a new consciousness of unparalleled luxury and sustainable living.",
    name: "Bineme",
    role: "Marketing",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Testimonials</p>
          <h2 className="section-heading mb-4">Hear from Our User</h2>
          <p className="section-subheading">
            Read how our users have achieved success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background rounded-2xl p-5 border border-border flex flex-col h-full"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                {t.text}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                  {t.name[0]}
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div className="ml-auto w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">
                    𝕏
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3 bg-background rounded-full px-5 py-3 border border-border">
            <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">
                C
              </span>
            </div>
            <div>
              <p className="text-sm font-medium">4.9 from 1.5k reviews</p>
              <p className="text-xs text-muted-foreground">
                1,500 happy clients
              </p>
            </div>
          </div>
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-foreground text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            See All
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
