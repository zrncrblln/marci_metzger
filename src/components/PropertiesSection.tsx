import { MapPin, Bed, Bath, Square } from "lucide-react";
import { useState } from "react";
import winchesterLuxuryRanch from "@/assets/winchester-luxury-ranch.jpg";
import mountainViewEstate from "@/assets/mountain-view-estate.jpg";
import golfMountainViewHome from "@/assets/golf-mountain-view-home.jpg";
import luxuryMountainFallsResidence from "@/assets/luxury-mountain-falls-residence.jpg";
import desertGreensGolfCommunityHome from "@/assets/desert-greens-golf-community-home.jpg";
import modernCountrysideRetreat from "@/assets/modern-countryside-retreat.jpg";

const properties = [
  {
    id: 1,
    name: "Winchester Luxury Ranch",
    location: "2851 Winchester Avenue – Calvada Valley U5",
    price: "$969,000",
    bedrooms: 4,
    bathrooms: 4,
    area: 2877,
    badge: "Featured",
    image: winchesterLuxuryRanch,
  },
  {
    id: 2,
    name: "Mountain View Estate",
    location: "2061 Iroquois Avenue – Calvada Valley",
    price: "$599,900",
    bedrooms: 3,
    bathrooms: 3,
    area: 2802,
    badge: "For Sale",
    image: mountainViewEstate,
  },
  {
    id: 3,
    name: "Golf & Mountain View Home",
    location: "5570 Ailanto Avenue – Mountain Falls",
    price: "$494,000",
    bedrooms: 3,
    bathrooms: 2,
    area: 2006,
    badge: "Featured",
    image: golfMountainViewHome,
  },
  {
    id: 4,
    name: "Luxury Mountain Falls Residence",
    location: "4935 E Cactus Canyon Drive – Mountain Falls",
    price: "$755,000",
    bedrooms: 3,
    bathrooms: 3,
    area: 2516,
    badge: "For Sale",
    image: luxuryMountainFallsResidence,
  },
  {
    id: 5,
    name: "Desert Greens Golf Community Home",
    location: "551 Montecito Drive – Desert Greens",
    price: "$199,900",
    bedrooms: 3,
    bathrooms: 2,
    area: 1222,
    badge: "Featured",
    image: desertGreensGolfCommunityHome,
  },
  {
    id: 6,
    name: "Modern Countryside Retreat",
    location: "4870 Jake Court – Rural Pahrump",
    price: "~$770,000*",
    bedrooms: 3,
    bathrooms: 2,
    area: 1905,
    badge: "For Sale",
    image: modernCountrysideRetreat,
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
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [baths, setBaths] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProperties = properties
    .filter((property) => {
      const matchesLocation =
        location === "" ||
        property.location.toLowerCase().includes(location.toLowerCase());
      const matchesType =
        type === "" ||
        property.badge.toLowerCase().includes(type.toLowerCase());
      const matchesBedrooms =
        bedrooms === "" || property.bedrooms >= parseInt(bedrooms);
      const matchesBaths =
        baths === "" || property.bathrooms >= parseInt(baths);
      const priceNum = parseInt(property.price.replace(/[$,]/g, ""));
      const matchesMinPrice = minPrice === "" || priceNum >= parseInt(minPrice);
      const matchesMaxPrice = maxPrice === "" || priceNum <= parseInt(maxPrice);
      return (
        matchesLocation &&
        matchesType &&
        matchesBedrooms &&
        matchesBaths &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    })
    .sort((a, b) => {
      if (sortBy === "price-low")
        return (
          parseInt(a.price.replace(/[$,]/g, "")) -
          parseInt(b.price.replace(/[$,]/g, ""))
        );
      if (sortBy === "price-high")
        return (
          parseInt(b.price.replace(/[$,]/g, "")) -
          parseInt(a.price.replace(/[$,]/g, ""))
        );
      if (sortBy === "bedrooms") return b.bedrooms - a.bedrooms;
      return 0;
    });

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
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-12 bg-background rounded-2xl p-6 shadow-sm border border-border">
          <h3 className="text-xl font-heading mb-6 text-center">
            Search Listings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Any Type</option>
                <option value="featured">Featured</option>
                <option value="for sale">For Sale</option>
                <option value="for rent">For Rent</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="bedrooms">Bedrooms</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Bedrooms</label>
              <input
                type="number"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                placeholder="Any Number"
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Baths</label>
              <input
                type="number"
                value={baths}
                onChange={(e) => setBaths(e.target.value)}
                placeholder="Any Number"
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Min Price
              </label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Min Price"
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Max Price
              </label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Max Price"
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex items-end">
              <button className="w-full px-4 py-2 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors">
                Search Now
              </button>
            </div>
          </div>
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
