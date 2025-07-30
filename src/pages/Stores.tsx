import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Stores = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> removed, now handled globally in App.tsx */}
      <main className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-8">
            Onze Winkels
          </h1>
          <p className="text-lg font-figtree text-muted-foreground text-center max-w-2xl mx-auto">
            Vind de dichtstbijzijnde Uspa winkel bij u in de buurt en ontdek ons 
            volledige assortiment aan premium spa-producten.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Stores;
