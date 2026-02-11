import { MapPin } from "lucide-react";
import alexandria from "@/assets/property-alexandria.jpg";
import bilvox from "@/assets/property-bilvox.jpg";
import giose from "@/assets/property-giose.jpg";
import leoxa from "@/assets/property-leoxa.jpg";

const properties = [
  {
    name: "Alexandria",
    location: "Grand Harbor",
    price: "$4,000.00",
    bedrooms: 4,
    bathrooms: 2,
    image: alexandria,
  },
  {
    name: "Bilvox",
    location: "Silver Heights",
    price: "$4,000.00",
    bedrooms: 4,
    bathrooms: 2,
    image: bilvox,
  },
  {
    name: "The Giose",
    location: "East Haven",
    price: "$4,000.00",
    bedrooms: 4,
    bathrooms: 2,
    image: giose,
  },
  {
    name: "Leoxa Retreat",
    location: "Crown Valley",
    price: "$4,000.00",
    bedrooms: 4,
    bathrooms: 2,
    image: leoxa,
  },
];

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Properties</p>
          <h2 className="section-heading mb-4">Discover homes that Inspire</h2>
          <p className="section-subheading">
            Luxury residences where design meets comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {properties.map((p) => (
            <div key={p.name} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-3">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-heading text-lg">{p.name}</h3>
                <span className="text-sm font-medium">{p.price}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                <MapPin size={14} />
                <span>{p.location}</span>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full border border-border text-xs">
                  {p.bedrooms} Bedroom
                </span>
                <span className="px-3 py-1 rounded-full border border-border text-xs">
                  {p.bathrooms} Bathroom
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-foreground text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            See all properties
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
