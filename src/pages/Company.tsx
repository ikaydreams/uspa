import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Company = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section 1: Heading */}
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-8 text-white">
            EEN FITTERE YOU
          </h1>

          {/* Section 2: Three Feature Blocks */}
         
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
  <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl bg-transparent border border-gray-700">
    <img
      src="https://static.wixstatic.com/media/25e0c0_2557dcd677eb442da5a47574b25241f1~mv2.jpg/v1/crop/x_14,y_0,w_315,h_315/fill/w_224,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FP%20Diensten_edited.jpg"
      alt="Persoonlijk Contact"
      className="w-full h-48 object-cover rounded-t-2xl"
    />
    <CardContent className="p-6">
      <h2 className="text-xl font-semibold mb-2 text-white">Persoonlijk Contact</h2>
      <p className="text-base text-white">
        Geen betere klant dan een fitte klant die optimaal geniet van zijn Bullfrog U-Spa.
      </p>
    </CardContent>
  </Card>

  <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl bg-transparent border border-gray-700">
    <img
      src="https://static.wixstatic.com/media/25e0c0_725640aa36544163b871af23113a5827~mv2.jpg/v1/fill/w_224,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fivestar-300x300_edited_edited.jpg"
      alt="Keuze voor Kwaliteit"
      className="w-full h-48 object-cover rounded-t-2xl"
    />
    <CardContent className="p-6">
      <h2 className="text-xl font-semibold mb-2 text-white">Keuze voor Kwaliteit</h2>
      <p className="text-base text-white">
        Voor U-Spa is sales pas echt succesvol wanneer een klant de naam U-Spa enthousiast doorgeeft aan vrienden.
      </p>
    </CardContent>
  </Card>

  <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl bg-transparent border border-gray-700">
    <img
      src="https://static.wixstatic.com/media/25e0c0_b4d4feabd7684562bdb29103f9f8b354~mv2.jpg/v1/fill/w_251,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/VB%20Spa%20Adv_edited_edited_edited.jpg"
      alt="Professionele Installatie"
      className="w-full h-48 object-cover rounded-t-2xl"
    />
    <CardContent className="p-6">
      <h2 className="text-xl font-semibold mb-2 text-white">Professionele Installatie</h2>
      <p className="text-base text-white">
        Van plaatsing tot aftersales. Geen stress met U-Spa.
      </p>
    </CardContent>
  </Card>
</div>


          {/* Section 3: Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              "JetPak Technologie",
              "Houtloze constructie",
              "Warmtepomp ready",
              "Voor alle lichaamslengtes",
              "Optimale Power en veiligheid",
              "Energiezuinig",
              "Behoudt van waarde bij inruil, zelfs na jaren"
            ].map((advantage, idx) => (
              <Card
                key={idx}
                className="shadow-md hover:shadow-lg transition-shadow rounded-2xl bg-transparent border border-gray-700"
              >
                <CardContent className="p-6 text-center">
                  <p className="text-lg text-white">{advantage}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Section 4: About Text */}
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
            <p className="text-lg text-white">
              Ons U-Spa Team weet als geen ander hoe zij de optimale installatie van een Bullfrog Spa moeten verzorgen.
            </p>
            <p className="text-lg text-white">
              Dankzij onze ruime ervaring met de levering van buitenspa’s weten wij precies waar we op moeten letten – van plaatsing tot aftersales.
            </p>
            <p className="text-lg text-white">
              Wij bieden geen product, maar een exclusieve beleving.
            </p>
          </div>

          {/* Section 5: Contact + Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Contact Info */}
            <div className="space-y-4">
              <h2 className="text-2xl mb-4 text-white">Contactgegevens</h2>
              <div>
                <h3 className="text-white">Telefoon</h3>
                <p className="text-white">+31 (0) 85 022 0799</p>
              </div>
              <div>
                <h3 className="text-white">E-mail</h3>
                <p className="text-white">info@u-spawellness.nl</p>
              </div>
              <div>
                <h3 className="text-white">Adres</h3>
                <p className="text-white">
                  De Amstel 15<br />
                  8253 PC Dronten, Nederland
                </p>
              </div>
            </div>

            {/* Contact Image */}
            <div>
              <img
                src="/images/U-Spa Excellent 1_edited.png"
                alt="U-Spa Wellness"
                className="w-full h-80 object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Company;
