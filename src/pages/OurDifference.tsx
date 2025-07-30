import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OurDifference = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> removed, now handled globally in App.tsx */}
      <main className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-8">
            Ons Verschil
          </h1>
          <p className="text-lg font-figtree text-muted-foreground text-center max-w-2xl mx-auto">
            Ontdek wat Uspa onderscheidt van andere spa's. Van onze unieke behandelingen 
            tot onze premium faciliteiten - ervaar het verschil.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurDifference;
