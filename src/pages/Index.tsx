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
        <h2 className="text-2xl font-bold mb-4 text-center">Onze Jacuzzi Collectie</h2>
        <p className="text-base text-center max-w-xl mx-auto mb-8">
         Ontdek ons assortiment innovatieve spa-apparaten, ontworpen voor comfort en prestaties. Elk model is uitgerust met aanpasbare jets, energiebesparende technologie en een modern ontwerp dat past bij uw levensstijl.
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
