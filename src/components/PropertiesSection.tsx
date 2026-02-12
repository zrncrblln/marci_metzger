import { MapPin, Bed, Bath, Square } from "lucide-react";
import alexandria from "@/assets/property-alexandria.jpg";
import bilvox from "@/assets/property-bilvox.jpg";
import giose from "@/assets/property-giose.jpg";
import leoxa from "@/assets/property-leoxa.jpg";
import villaCustom from "@/assets/villa-custom.jpg";
import villaInnovative from "@/assets/villa-innovative.jpg";

const properties = [
  {
    name: "Alexandria",
    location: "Grand Harbor",
    price: "$4,000.00",
    bedrooms: 4,
    bathrooms: 2,
    area: 2500,
    badge: "Featured",
    image: alexandria,
  },
  {
    name: "Bilvox",
    location: "Silver Heights",
    price: "$4,500.00",
    bedrooms: 5,
    bathrooms: 3,
    area: 3200,
    badge: "For Sale",
    image: bilvox,
  },
  {
    name: "The Giose",
    location: "East Haven",
    price: "$3,800.00",
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    badge: "Featured",
    image: giose,
  },
  {
    name: "Leoxa Retreat",
    location: "Crown Valley",
    price: "$5,200.00",
    bedrooms: 6,
    bathrooms: 4,
    area: 3800,
    badge: "For Sale",
    image: leoxa,
  },
  {
    name: "Villa Custom",
    location: "Mountain View",
    price: "$6,000.00",
    bedrooms: 5,
    bathrooms: 3,
    area: 3500,
    badge: "Featured",
    image: villaCustom,
  },
  {
    name: "Villa Innovative",
    location: "Lake District",
    price: "$4,800.00",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    badge: "For Rent",
    image: villaInnovative,
  },
];

const PropertyCard = ({ property }: { property: (typeof properties)[0] }) => {
  return (
    <div className="group cursor-pointer bg-background rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-border">
      <div className="relative overflow-hidden">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full border border-border">
            {property.badge}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-sm font-semibold rounded-full">
            {property.price}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl mb-2 group-hover:text-accent transition-colors">
          {property.name}
        </h3>
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
          <MapPin size={16} />
          <span>{property.location}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Bed size={16} />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={16} />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Square size={16} />
            <span>{property.area} sq ft</span>
          </div>
        </div>
        <hr className="border-border mb-4" />
        <button className="w-full px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Featured Properties
          </p>
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Discover homes that inspire
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Luxury residences where design meets comfort and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-foreground text-primary-foreground text-sm font-medium rounded-full hover:bg-foreground/90 transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
