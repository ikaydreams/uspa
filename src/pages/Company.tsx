import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Company = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section 1: Heading */}
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-8">
            EEN FITTERE YOU
          </h1>

          {/* Section 2: Three Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl">
              <img
                src="/images/FP Diensten_edited.jpg"
                alt="Persoonlijk Contact"
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">Persoonlijk Contact</h2>
                <p className="text-base text-black">
                  Geen betere klant dan een fitte klant die optimaal geniet van zijn Bullfrog U-Spa.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl">
              <img
                src="/images/fivestar-300x300_edited_edited.jpg"
                alt="Keuze voor Kwaliteit"
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">Keuze voor Kwaliteit</h2>
                <p className="text-base text-black">
                  Voor U-Spa is sales pas echt succesvol wanneer een klant de naam U-Spa enthousiast doorgeeft aan vrienden.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow rounded-2xl">
              <img
                src="/images/VB Spa Adv_edited_edited_edited.jpg"
                alt="Professionele Installatie"
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">Professionele Installatie</h2>
                <p className="text-base text-black">
                  Van plaatsing tot aftersales. Geen stress met U-Spa.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Section 3: About Text */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-black mb-4">
              Wij verkopen een kwaliteitsproduct met talloze voordelen, zoals:
            </p>
            <ul className="list-disc list-inside text-black text-left inline-block mb-4">
              <li>JetPak Technologie</li>
              <li>Houtloze constructie</li>
              <li>Warmtepomp ready</li>
              <li>Voor alle lichaamslengtes</li>
              <li>Optimale Power en veiligheid</li>
              <li>Energiezuinig</li>
              <li>Behoudt van waarde bij inruil, zelfs na jaren</li>
            </ul>
            <p className="text-lg text-black mb-4">
              Ons U-Spa Team weet als geen ander hoe zij de optimale installatie van een Bullfrog Spa moeten verzorgen. 
            </p>
            <p className="text-lg text-black">
              Wij hebben veel ervaring met de levering van de buitenspa’s en weten precies waar we op moeten letten. 
              Wij bieden geen product, maar een exclusieve beleving.
            </p>
          </div>

          {/* Section 4: Contact + Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Contact Info */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Contactgegevens</h2>
              <div>
                <h3 className="font-bold">Telefoon</h3>
                <p className="text-black">+31 (0) 85 022 0799</p>
              </div>
              <div>
                <h3 className="font-bold">E-mail</h3>
                <p className="text-black">info@u-spawellness.nl</p>
              </div>
              <div>
                <h3 className="font-bold">Adres</h3>
                <p className="text-black">
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
