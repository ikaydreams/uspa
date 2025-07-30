import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> removed, now handled globally in App.tsx */}
      <main className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-8">
            Uspa Community
          </h1>
          <p className="text-lg font-figtree text-muted-foreground text-center max-w-2xl mx-auto">
            Sluit je aan bij onze gemeenschap van welzijn en ontspanning. 
            Deel je ervaringen en ontdek tips voor een gezondere levensstijl.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
