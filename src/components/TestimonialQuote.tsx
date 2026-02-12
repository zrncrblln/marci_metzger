import { Star } from "lucide-react";
import marcimetzger from "../assets/marcimetzger.png";

const TestimonialQuote = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-background rounded-3xl p-8 md:p-12 border border-border shadow-lg">
          <blockquote className="text-center">
            <p className="font-heading text-base md:text-lg leading-relaxed text-foreground mb-8 italic">
              "I love that small-town feeling that our community offers.
              Spectacular golf courses, parks, pool, and easy access to Las
              Vegas make Pahrump a great place to call home. Working or retired,
              fast-paced or looking to relax.. there's a place for you here! I
              enjoy living in the Mountain Falls community and will strive to
              find you a home that will suit you just as this community does
              me."
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-secondary overflow-hidden">
                <img
                  src={marcimetzger}
                  alt="Marci J Metzger"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <span className="text-lg font-medium text-foreground block">
                  Marci J Metzger
                </span>
                <span className="text-sm text-muted-foreground">
                  REALTOR for Nearly Three Decades
                </span>
              </div>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialQuote;
