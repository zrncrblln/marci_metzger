import { Star } from "lucide-react";

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
        <p className="font-heading text-2xl md:text-3xl leading-relaxed text-foreground mb-8">
          It feels healthier, smoother & more radiant than ever. I love knowing I'm using something natural and effective!
        </p>
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
              alt="Minedly Licsa"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-medium text-foreground">Minedly Licsa</span>
          <span className="text-xs text-muted-foreground">@Ceo Founder</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialQuote;
