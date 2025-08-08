import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

const SpaDevicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const devices = [
    {
      id: 1,
      name: "M Series™ Spa",
      description: "Ervaar ongeëvenaarde luxe met de M Series™, met veelzijdige opstellingen, 16 verwisselbare JetPak®-massages en intuïtieve bediening voor een elite spa-ervaring.",
      features: ["Tot 16 JetPak®-massages", "Premium touchscreen bediening", "Simplicity® Filtratie", "CloudControl 2™ Wifi"],
      image: "/M8.webp",
      link: "/series/m-series",
    },
    {
      id: 2,
      name: "A Series™ A9L",
      description: "De A9L biedt plaats aan 9 personen met 7 JetPak®-zetels en een luxe ligstoel, ideaal voor sociale bijeenkomsten en gepersonaliseerde hydrotherapie.",
      features: ["9 zitplaatsen", "7 JetPak®-zetels", "Simplicity® Filtratie", "Premium waterval"],
      image: "/A9L_Top-Down.webp",
      link: "/series/a-series",
    },
    {
      id: 3,
      name: "STIL 6 Hot Tub - Stil Modern Class™",
      description: "De STIL 6 combineert strakke lijnen met geavanceerde hydrotherapie voor een compacte, luxe spa-ervaring.",
      features: ["JetPak Therapy System", "Compact modern design", "Energiezuinige technologie", "LED-verlichting"],
      image: "/STIL-7_top-down.webp",
      link: "/series/stil-series",
    },
    {
      id: 4,
      name: "A Series™ A8L",
      description: "De A8L biedt 7 zitplaatsen, inclusief een premium ligstoel en 6 JetPak®-opties, perfect voor koppels of gezinnen die variatie zoeken in ontspanning.",
      features: ["7 zitplaatsen", "6 JetPak®-zetels", "Touchscreen bediening", "LED-verlichting"],
      image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A8_Top-Down.png",
      link: "/series/a-series",
    },
    {
      id: 5,
      name: "X Series™ Spa",
      description: "De X Series™ combineert betaalbare luxe met duurzame EnduraFrame™-constructie, efficiënte waterfiltratie en aanpasbare LED-verlichting.",
      features: ["EnduraFrame™ constructie", "Efficiënte filtratie", "LED-verlichting", "Betaalbare luxe"],
      image: "/X8_Select_Snow_Top.webp",
      link: "/series/x-series",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              className="flex transition-transform duration-300 ease-in-out gap-4 md:gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {devices.map((device) => (
                <div key={device.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0">
                  <Link to={device.link} target="_blank" rel="noopener noreferrer">
                    <Card className="bg-card border-border h-full hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img
                          src={device.image}
                          alt={device.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="text-xl font-poppins font-bold">
                            {device.name}
                          </h3>
                        </div>
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
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Vorige spa apparaten"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-card border border-border hover:bg-accent text-foreground p-3 rounded-full transition-all duration-200 shadow-soft disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            aria-label="Volgende spa apparaten"
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
