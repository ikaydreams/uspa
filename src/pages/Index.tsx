import HeroBanner from "@/components/HeroBanner";
import SpaDevicesCarousel from "@/components/SpaDevicesCarousel";
import ServicesSection from "@/components/ServicesSection";
import SpaLocationsCarousel from "@/components/SpaLocationsCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";

import Footer from "@/components/Footer";
import ContactAndBullfrogSection from "@/components/ContactAndBullfrogSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />
      <ContactAndBullfrogSection />
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Onze Jacuzzi Collectie</h2>
        <p className="text-base text-center max-w-xl mx-auto mb-8">
          Ontdek ons assortiment innovatieve spa-apparaten, ontworpen voor comfort en prestaties. Elk model is uitgerust met aanpasbare jets, energiebesparende technologie en een modern ontwerp dat past bij uw levensstijl.
        </p>
      </section>
      <SpaLocationsCarousel />
      <TestimonialsSection />
      
      <Footer />
    </div>
  );
};

export default Index;
