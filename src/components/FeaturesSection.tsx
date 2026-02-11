import {
  Star,
  FileText,
  Repeat,
  Lightbulb,
  Paintbrush,
  MapPin,
} from "lucide-react";
import smoothJourney from "@/assets/villa-smooth-journey.jpg";
import innovative from "@/assets/villa-innovative.jpg";
import custom from "@/assets/villa-custom.jpg";

const features = [
  {
    icon: FileText,
    title: "Exceptional Craftsmanship",
    description:
      "Meticulously crafted with top-tier materials for unmatched quality.",
  },
  {
    type: "image" as const,
    title: "Smooth Journey",
    image: smoothJourney,
  },
  {
    icon: Repeat,
    title: "Adaptable Design",
    description: "Our designs adapt to your needs for lasting functionality.",
  },
  {
    type: "image" as const,
    title: "Innovative Living",
    image: innovative,
  },
  {
    icon: Paintbrush,
    title: "Custom Design",
    description:
      "From start to finish, we ensure a seamless process dedicated to realizing your vision.",
  },
  {
    type: "image" as const,
    title: "Custom Design Image",
    image: custom,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Features</p>
          <h2 className="section-heading mb-4">
            The essence of extraordinary
            <br />
            living lies in the details.
          </h2>
          <p className="section-subheading">
            Explore what makes each Marci Metzger home unique.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Row 1 */}
          <div className="bg-background rounded-2xl p-6 border border-border">
            <FileText size={24} className="text-foreground mb-3" />
            <h3 className="font-heading text-lg mb-2">
              Exceptional Craftsmanship
            </h3>
            <p className="text-sm text-muted-foreground">
              Meticulously crafted with top-tier materials for unmatched
              quality.
            </p>
          </div>
          <div className="bg-background rounded-2xl overflow-hidden border border-border">
            <div className="p-4 pb-0">
              <h3 className="font-heading text-lg mb-2">Smooth Journey</h3>
            </div>
            <img
              src={smoothJourney}
              alt="Smooth Journey"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="bg-background rounded-2xl p-6 border border-border">
            <Repeat size={24} className="text-foreground mb-3" />
            <h3 className="font-heading text-lg mb-2">Adaptable Design</h3>
            <p className="text-sm text-muted-foreground">
              Our designs adapt to your needs for lasting functionality.
            </p>
          </div>

          {/* Row 2 */}
          <div className="bg-background rounded-2xl overflow-hidden border border-border">
            <div className="p-4 pb-0">
              <h3 className="font-heading text-lg mb-2">Innovative Living</h3>
            </div>
            <img
              src={innovative}
              alt="Innovative Living"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="bg-background rounded-2xl p-6 border border-border">
            <Paintbrush size={24} className="text-foreground mb-3" />
            <h3 className="font-heading text-lg mb-2">Custom Design</h3>
            <p className="text-sm text-muted-foreground">
              From start to finish, we ensure a seamless process dedicated to
              realizing your vision.
            </p>
          </div>
          <div className="bg-background rounded-2xl overflow-hidden border border-border">
            <img
              src={custom}
              alt="Custom Design"
              className="w-full h-full object-cover min-h-[200px]"
            />
          </div>

          {/* Row 3 - spanning */}
          <div className="md:col-span-3 bg-background rounded-2xl p-6 border border-border flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <MapPin size={24} className="text-foreground mb-3" />
              <h3 className="font-heading text-lg mb-2">Prime Locations</h3>
              <p className="text-sm text-muted-foreground">
                Luxury meets efficiency with smart tech and eco features.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                Nestled in serene settings, Haven homes provide privacy and
                breathtaking views.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                Each Haven home is a unique creation, tailored to fit your
                lifestyle and taste.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border bg-background text-sm">
            <Star size={16} className="fill-accent text-accent" />
            <span>Trusted by 50+ clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
