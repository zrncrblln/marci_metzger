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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TestimonialQuote />
      <ImageShowcase />
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
