import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Waves, Sparkles, Heart, Flower } from "lucide-react";

const SpaDevicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 const devices = [
  {
    id: 1,
    name: "M Series™ Spa",
    description: "Ervaar ongeëvenaarde luxe met de M Series™, met veelzijdige opstellingen, 16 verwisselbare JetPak®-massages en intuïtieve bediening voor een elite spa-ervaring.",
    features: ["Tot 16 JetPak®-massages", "Premium touchscreen bediening", "Simplicity® Filtratie", "CloudControl 2™ Wifi"],
    icon: <Waves className="w-6 h-6" />,
    image: "/M8.webp" 
  }, // <-- Added missing closing brace and comma
  {
      id: 2,
      name: "A Series™ A9L",
      description: "De A9L biedt plaats aan 9 personen met 7 JetPak®-zetels en een luxe ligstoel, ideaal voor sociale bijeenkomsten en gepersonaliseerde hydrotherapie.",
      features: ["9 zitplaatsen", "7 JetPak®-zetels", "Simplicity® Filtratie", "Premium waterval"],
      icon: <Sparkles className="w-6 h-6" />,
      image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A9L-Top-Down.png" // Sourced from A9L page
    },
    {
      id: 3,
      name: "A Series™ A8L",
      description: "De A8L biedt 7 zitplaatsen, waaronder een premium ligstoel en 6 JetPak®-opties, perfect voor koppels of gezinnen die variatie zoeken in ontspanning.",
      features: ["7 zitplaatsen", "6 JetPak®-zetels", "Touchscreen bediening", "LED-verlichting"],
      icon: <Heart className="w-6 h-6" />,
      image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A8_Top-Down.png" // Sourced from provided A8L URL
    },
    {
      id: 4,
      name: "X Series™ Spa",
      description: "De X Series™ combineert betaalbare luxe met duurzame EnduraFrame™-constructie, efficiënte waterfiltratie en aanpasbare LED-verlichting.",
      features: ["EnduraFrame™ constructie", "Efficiënte filtratie", "LED-verlichting", "Betaalbare luxe"],
      icon: <Flower className="w-6 h-6" />,
      image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X-Series-Placeholder.png" // Placeholder: specific X Series™ image not provided
    }
  ];

  const itemsToShow = 3;
  const maxIndex = Math.max(0, devices.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-muted/10">
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

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {devices.map((device) => (
                <div key={device.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
                  <Card className="bg-card border-border h-full hover:shadow-elegant transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={device.image}
                        alt={device.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-poppins font-bold mb-3">
                        {device.name}
                      </h3>
                      <p className="font-figtree text-muted-foreground mb-4 text-sm leading-relaxed">
                        {device.description}
                      </p>
                      
                      <div className="border-t border-border pt-4">
                        <p className="text-sm font-semibold mb-2">Kenmerken:</p>
                        <div className="flex flex-wrap gap-1">
                          {device.features.map((feature, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-card border border-border hover:bg-accent text-foreground p-3 rounded-full transition-all duration-200 shadow-soft disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-card border border-border hover:bg-accent text-foreground p-3 rounded-full transition-all duration-200 shadow-soft disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpaDevicesCarousel;
