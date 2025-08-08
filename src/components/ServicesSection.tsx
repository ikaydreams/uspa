import { Card, CardContent } from "@/components/ui/card";
import { Waves, Sparkles, Heart, Flower, Droplet } from "lucide-react";

const ServicesSection = () => {
  const devices = [
    {
      icon: <Waves className="w-12 h-12" />,
      title: "M Series™ Spa",
      description: "Ervaar ongeëvenaarde luxe met de M Series™, met veelzijdige opstellingen, 16 verwisselbare JetPak®-massages en intuïtieve bediening voor een elite spa-ervaring.",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "A Series™ A9L",
      description: "De A9L biedt plaats aan 9 personen met 7 JetPak®-zetels en een luxe ligstoel, ideaal voor sociale bijeenkomsten en gepersonaliseerde hydrotherapie.",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "A Series™ A8L",
      description: "De A8L biedt 7 zitplaatsen, waaronder een premium ligstoel en 6 JetPak®-opties, perfect voor koppels of gezinnen die variatie zoeken in ontspanning.",
    },
    {
      icon: <Flower className="w-12 h-12" />,
      title: "X Series™ Spa",
      description: "De X Series™ combineert betaalbare luxe met duurzame EnduraFrame™-constructie, efficiënte waterfiltratie en aanpasbare LED-verlichting.",
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: "STIL 7™ Spa",
      description: "De STIL 7 combineert strak design met geavanceerde JetPak®-technologie voor een moderne spa-ervaring.",
    },
  ];

  return (
    <section className="py-20 bg-background" id="devices">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Onze Spa Apparaten
          </h2>
          <p className="text-lg font-figtree text-muted-foreground max-w-2xl mx-auto">
            Ontdek ons assortiment innovatieve spa-apparaten van Bullfrog Spas, ontworpen
            voor luxe, comfort en personalisatie, met geavanceerde technologie zoals het JetPak Therapy System®.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devices.map((device, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-foreground mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {device.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold mb-4">
                  {device.title}
                </h3>
                <p className="font-figtree text-muted-foreground leading-relaxed">
                  {device.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
