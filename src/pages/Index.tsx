import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import partnership from "@/assets/partnership.png";
import TestimonialQuote from "@/components/TestimonialQuote";
import ImageShowcase from "@/components/ImageShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import PropertiesSection from "@/components/PropertiesSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const images = [
  {
    src: "/src/assets/c1.png",
    alt: "High resolution image c1 from Marci Metzger Homes",
  },
  {
    src: "/src/assets/c2.png",
    alt: "High resolution image c2 from Marci Metzger Homes",
  },
  {
    src: "/src/assets/c3.png",
    alt: "High resolution image c3 from Marci Metzger Homes",
  },
  {
    src: "/src/assets/c4.png",
    alt: "High resolution image c4 from Marci Metzger Homes",
  },
  {
    src: "/src/assets/c5.jpg",
    alt: "High resolution image c5 from Marci Metzger Homes",
  },
  {
    src: "/src/assets/c6.png",
    alt: "High resolution image c6 from Marci Metzger Homes",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background mt-8">
      <Navbar />
      <HeroSection />
      <div className="py-10">
        <img
          src={partnership}
          alt="Partnership"
          className="mx-auto block max-w-4xl h-auto"
        />
      </div>
      <TestimonialQuote />
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Signature Homes
          </h2>
          <p className="section-subheading mb-2">Showcase</p>
        </div>
      </section>
      <ImageShowcase images={images.map((img) => img.src)} />
      <FeaturesSection />
      <PropertiesSection />
      <BlogSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
