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
                src="https://static.wixstatic.com/media/25e0c0_edd8bbd1f7dd45f795aef934f8651ba2~mv2.jpg/v1/fill/w_393,h_264,al_c,q_80,usm_0.66_1.00_0.01/25e0c0_edd8bbd1f7dd45f795aef934f8651ba2~mv2.jpg"
                alt="90% minder leidingen"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-poppins font-semibold mb-2">90% minder leidingen</h2>
              <p className="text-base font-sans text-black">
                Bullfrog Spa's zijn de zuinigste ter wereld en warmtepomp ready. De volledige schuimisolatie zorgt ervoor dat er geen energie verloren gaat. Daarnaast heeft een Bullfrog Spa 90% minder leidingen dan de concurrentie.
              </p>
            </div>
            {/* Block 2: JetPaks */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://static.wixstatic.com/media/25e0c0_d701f0cfa7ee4e5db61641e6aa714c1e~mv2.jpg/v1/fill/w_393,h_264,al_c,q_80,usm_0.66_1.00_0.01/25e0c0_d701f0cfa7ee4e5db61641e6aa714c1e~mv2.jpg"
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
                src="https://static.wixstatic.com/media/25e0c0_0d41894a1333460f9e5d63859c3f421f~mv2.jpg/v1/fill/w_393,h_264,al_c,q_80,usm_0.66_1.00_0.01/25e0c0_0d41894a1333460f9e5d63859c3f421f~mv2.jpg"
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
                src="https://static.wixstatic.com/media/25e0c0_86aab769df8645cd9f370c24030a32c2~mv2.jpg/v1/fill/w_314,h_267,al_c,q_80,usm_0.66_1.00_0.01/25e0c0_86aab769df8645cd9f370c24030a32c2~mv2.jpg"
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
                src="https://static.wixstatic.com/media/25e0c0_6d331fee79b2495a903c0307cae16b89~mv2.png/v1/fill/w_393,h_379,al_c,q_80,usm_0.66_1.00_0.01/25e0c0_6d331fee79b2495a903c0307cae16b89~mv2.png"
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
                src="https://static.wixstatic.com/media/25e0c0_b8504216ae944cce89ea555b9f03a5c2~mv2.jpg/v1/fill/w_393,h_323,al_c,q_80,usm_0.66_1.00_0.01/25e0c0_b8504216ae944cce89ea555b9f03a5c2~mv2.jpg"
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
