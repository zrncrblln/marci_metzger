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
    title: "Intelligent Design, Elevated Living",
    description:
      "Where luxury, sustainability, and cutting-edge technology converge.",
  },
  {
    type: "image" as const,
    title: "Smooth Journey",
    image: smoothJourney,
    description:
      "From start to finish, we ensure a seamless process dedicated to realizing your vision.",
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
    description: "Luxury meets efficiency with smart tech and eco features.",
  },
  {
    type: "image" as const,
    title: "Custom Design",
    image: custom,
    description:
      "Each Haven home is a unique creation, tailored to fit your lifestyle and taste.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description:
      "Nestled in serene settings, Haven homes provide privacy and breathtaking views.",
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
        ''
        {/* Bento Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {/* Row 1 */}
          <div className="bg-background rounded-2xl overflow-hidden border border-border">
            <div className="p-4 pb-0">
              <h3 className="font-heading text-lg mb-2">Innovative Living</h3>
            </div>
            <img
              src={innovative}
              alt="Innovative Living"
              className="w-full h-48 object-cover"
            />
            <p className="text-sm text-muted-foreground px-4 pb-4">
              Luxury meets efficiency with smart tech and eco features.
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
            <p className="text-sm text-muted-foreground px-4 pb-4">
              From start to finish, we ensure a seamless process dedicated to
              realizing your vision.
            </p>
          </div>
          <div className="bg-background rounded-2xl overflow-hidden border border-border">
            <div className="p-4 pb-0">
              <h3 className="font-heading text-lg mb-2">Custom Design</h3>
            </div>
            <img
              src={custom}
              alt="Custom Design"
              className="w-full h-48 object-cover"
            />
            <p className="text-sm text-muted-foreground px-4 pb-4">
              Each Haven home is a unique creation, tailored to fit your
              lifestyle and taste.
            </p>
          </div>

          {/* Row 2 */}
          <div className="bg-background rounded-2xl p-4 border border-border h-40">
            <FileText size={24} className="text-foreground mb-3" />
            <h3 className="font-heading text-lg mb-2">
              Exceptional Craftsmanship
            </h3>
            <p className="text-sm text-muted-foreground">
              Where luxury, sustainability, and cutting-edge technology
              converge.
            </p>
          </div>
          <div className="bg-background rounded-2xl p-4 border border-border h-40">
            <Repeat size={24} className="text-foreground mb-3" />
            <h3 className="font-heading text-lg mb-2">Adaptable Design</h3>
            <p className="text-sm text-muted-foreground">
              Our designs adapt to your needs for lasting functionality.
            </p>
          </div>
          <div className="bg-background rounded-2xl p-4 border border-border h-40">
            <MapPin size={24} className="text-foreground mb-3" />
            <h3 className="font-heading text-lg mb-2">Prime Locations</h3>
            <p className="text-sm text-muted-foreground">
              Nestled in serene settings, Haven homes provide privacy and
              breathtaking views.
            </p>
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
