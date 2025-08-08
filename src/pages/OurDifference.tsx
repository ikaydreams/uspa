import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const OurDifference = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-8">
            Uw Voordeel
          </h1>
          <p className="text-lg font-figtree text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Bij U-Spa bieden we meer dan alleen een spa. Ontdek de voordelen van onze Bullfrog Spa’s en onze toewijding aan uw welzijn.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-poppins font-semibold mb-4">Persoonlijk Contact</h2>
              <p className="font-figtree text-muted-foreground">
                Voor U-Spa is sales pas echt succesvol wanneer een klant onze naam enthousiast doorgeeft aan vrienden. Van plaatsing tot aftersales, geen stress met U-Spa.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-poppins font-semibold mb-4">Keuze voor Kwaliteit</h2>
              <ul className="font-figtree text-muted-foreground list-disc list-inside">
                <li>JetPak Technologie</li>
                <li>Houtloze constructie</li>
                <li>Warmtepomp ready</li>
                <li>Voor alle lichaamslengtes</li>
                <li>Optimale power en veiligheid</li>
                <li>Energiezuinig</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-poppins font-semibold mb-4">Professionele Installatie</h2>
              <p className="font-figtree text-muted-foreground">
                Ons U-Spa Team weet als geen ander hoe de optimale installatie van een Bullfrog Spa te verzorgen. Wij bieden een exclusieve beleving, van levering tot onderhoud.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg">Neem Contact Op</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurDifference;
