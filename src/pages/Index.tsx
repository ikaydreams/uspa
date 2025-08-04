import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
// import ServicesSection from "@/components/ServicesSection";
// import FeaturedTreatmentsCarousel from "@/components/FeaturedTreatmentsCarousel";
import SpaLocationsCarousel from "@/components/SpaLocationsCarousel";
import CustomerExperiencesCarousel from "@/components/CustomerExperiencesCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> removed, now handled globally in App.tsx */}
      <HeroBanner />
      {/* Removed ServicesSection and FeaturedTreatmentsCarousel */}
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Hot Tub Collection</h2>
        <p className="text-base text-center max-w-xl mx-auto mb-8">
          Explore our range of innovative spa devices designed for comfort and performance. Each model features customizable jets, energy-saving technology, and modern design to fit your lifestyle.
        </p>
      </section>
      <SpaLocationsCarousel />
      <CustomerExperiencesCarousel />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
