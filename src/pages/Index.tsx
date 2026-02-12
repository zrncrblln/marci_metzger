import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import partnership from "@/assets/partnership.png";
import c1 from "@/assets/c1.png";
import c2 from "@/assets/c2.png";
import c3 from "@/assets/c3.png";
import c4 from "@/assets/c4.png";
import c5 from "@/assets/c5.jpg";
import c6 from "@/assets/c6.png";
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

const images = [c1, c2, c3, c4, c5, c6];

const Index = () => {
  return (
    <div className="min-h-screen bg-background mt-8">
      <Navbar />
      <HeroSection />
      <div className="py-10 px-4">
        <img
          src={partnership}
          alt="Partnership"
          className="mx-auto block w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto"
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
      <ImageShowcase images={images} />
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
