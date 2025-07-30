import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Company = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> removed, now handled globally in App.tsx */}
      <main className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-8">
            Over Uspa
          </h1>
          <p className="text-lg font-figtree text-muted-foreground text-center max-w-2xl mx-auto">
            Leer meer over onze missie, visie en het team achter Uspa. 
            Ontdek waarom we de leidende spa-keten van Nederland zijn.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Company;
