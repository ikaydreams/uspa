import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ServicesSection from "@/components/ServicesSection";
import FeaturedTreatmentsCarousel from "@/components/FeaturedTreatmentsCarousel";
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
      <ServicesSection />
      <FeaturedTreatmentsCarousel />
      <SpaLocationsCarousel />
      <CustomerExperiencesCarousel />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
