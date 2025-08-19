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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Block 1: 90% minder leidingen */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/Girl in sun 10x5.jpg" // Replace with actual image path
                alt="90% minder leidingen"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-poppins font-semibold mb-2">90% minder leidingen</h2>
              <p className="text-base font-sans text-muted-foreground">
                Bullfrog Spa's zijn de zuinigste ter wereld en warmtepomp ready. De volledige schuimisolatie zorgt ervoor dat er geen energie verloren gaat. Daarnaast heeft een Bullfrog Spa 90% minder leidingen dan de concurrentie.
              </p>
            </div>
            {/* Block 2: JetPaks */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/U-SPA Energizes You logo.jpg" // Replace with actual image path
                alt="JetPaks"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-poppins font-semibold mb-2">JetPaks</h2>
              <p className="text-base font-sans text-muted-foreground">
                Met 16 verschillende JetPaks kiest u precies de massage die bij ú past. En dankzij de variërende zithoogtes vindt iedereen – van klein tot groot – moeiteloos zijn ideale relaxplek!
              </p>
            </div>
            {/* Block 3: Endura Frame */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/U-Spa Excellent 1_edited.png" // Replace with actual image path
                alt="Endura Frame"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-poppins font-semibold mb-2">Endura Frame</h2>
              <p className="text-base font-sans text-muted-foreground">
                Alle Bullfrog Spa's bestaan uit een duurzaam, en volledig gesloten onderstel: Endura Frame™. Het is hout en metaalvrij, zodat het niet kan verweren of roesten. Deze constructie garandeert een lange levensduur.
              </p>
            </div>
            {/* Block 4: Massage voor het oor */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/fivestar-300x300_edited_edited.jpg" // Replace with actual image path
                alt="Massage voor het oor"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-poppins font-semibold mb-2">Massage voor het oor</h2>
              <p className="text-base font-sans text-muted-foreground">
                De audiosystemen met onzichtbare luidsprekers en subwoofer in onze Bullfrog spa's zorgen voor ontspanning en helpen de bloeddruk te verlagen.
              </p>
            </div>
            {/* Block 5: Eenvoudig reinigen */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/FP Diensten_edited.jpg" // Replace with actual image path
                alt="Eenvoudig reinigen"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-poppins font-semibold mb-2">Eenvoudig reinigen</h2>
              <p className="text-base font-sans text-muted-foreground">
                Acryl-oppervlakken zijn poriënvrij, vlak en zeer eenvoudig te reinigen. Wij raden regelmatig onderhoud met vloeibare, niet-krassende middelen aan om de glans te behouden.
              </p>
            </div>
            {/* Block 6: Uw spa inruilen? */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/VB Spa Adv_edited_edited_edited.jpg" // Replace with actual image path
                alt="Uw spa inruilen?"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-poppins font-semibold mb-2">Uw spa inruilen?</h2>
              <p className="text-base font-sans text-muted-foreground">
                Indien u uw huidige spa wilt ruilen voor een nieuwe, neem dan gerust contact met ons op. Wij kopen uw oude spa graag terug, ook na jaren van intensief gebruik.
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
