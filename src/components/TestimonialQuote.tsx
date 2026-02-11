import { Star } from "lucide-react";
import marcimetzger from "../assets/marcimetzger.png";

const TestimonialQuote = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-14 h-14 rounded-xl bg-secondary mx-auto mb-4 overflow-hidden flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=100&h=100&fit=crop"
            alt="Villa thumbnail"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(4)].map((_, i) => (
            <Star key={i} size={18} className="fill-accent text-accent" />
          ))}
        </div>
        <p className="font-heading text-2xl md:text-xl leading-relaxed text-foreground mb-8">
          I love that small-town feeling that our community offers. Spectacular
          golf courses, parks, pool, and easy access to Las Vegas make Pahrump a
          great place to call home. Working or retired, fast-paced or looking to
          relax.. there's a place for you here! I enjoy living in the Mountain
          Falls community and will strive to find you a home that will suit you
          just as this community does me.
        </p>
        <div className="flex flex-col items-center gap-1">
          <div className="w-40 h-40 rounded-full bg-secondary overflow-hidden">
            <img
              src={marcimetzger}
              alt="Marci J Metzger"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-medium text-foreground">
            Marci J Metzger
          </span>
          <span className="text-xs text-muted-foreground">
            REALTOR for Nearly Three Decades
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialQuote;
