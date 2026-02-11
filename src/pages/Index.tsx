import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TestimonialQuote />
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
