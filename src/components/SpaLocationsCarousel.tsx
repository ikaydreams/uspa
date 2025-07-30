import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, MapPin, Phone, Clock } from "lucide-react";

const SpaLocationsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const locations = [
    {
      id: 1,
      name: "Uspa Amsterdam Centrum",
      address: "Kalverstraat 123, 1012 AB Amsterdam",
      phone: "+31 20 123 4567",
      hours: "Ma-Zo: 09:00-21:00",
      description: "Onze flagship locatie in het hart van Amsterdam met ultramoderne faciliteiten.",
      features: ["Hydrotherapie", "Sauna", "Massagetherapie", "Yoga Studio"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Uspa Rotterdam Wellness",
      address: "Coolsingel 456, 3012 CD Rotterdam",
      phone: "+31 10 987 6543",
      hours: "Ma-Zo: 10:00-20:00",
      description: "Moderne spa in het centrum van Rotterdam met adembenemend uitzicht over de stad.",
      features: ["Infinity Pool", "Rooftop Terras", "Steam Room", "Meditation Room"],
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Uspa Utrecht Luxury",
      address: "Oudegracht 789, 3511 EF Utrecht",
      phone: "+31 30 555 7890",
      hours: "Ma-Zo: 09:30-20:30",
      description: "Historische pand met moderne spa-faciliteiten aan de beroemde Oudegracht.",
      features: ["Thermal Baths", "Salt Cave", "Couples Suites", "Garden Terrace"],
      image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      name: "Uspa Den Haag Premium",
      address: "Lange Voorhout 321, 2514 EC Den Haag",
      phone: "+31 70 444 5678",
      hours: "Ma-Zo: 08:00-22:00",
      description: "Exclusieve spa in het regeringscentrum met premium behandelingen en services.",
      features: ["VIP Lounge", "Private Pools", "Wine Therapy", "Concierge Service"],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const itemsToShow = 3;
  const maxIndex = Math.max(0, locations.length - itemsToShow);

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
            Onze Locaties
          </h2>
          <p className="text-lg font-figtree text-muted-foreground max-w-2xl mx-auto">
            Bezoek een van onze premium spa-locaties verspreid door Nederland. 
            Elke locatie biedt unieke faciliteiten en een onvergetelijke ervaring.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {locations.map((location) => (
                <div key={location.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
                  <Card className="bg-card border-border h-full hover:shadow-elegant transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-poppins font-bold mb-3">
                        {location.name}
                      </h3>
                      <p className="font-figtree text-muted-foreground mb-4 text-sm leading-relaxed">
                        {location.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {location.address}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Phone className="w-4 h-4 mr-2" />
                          {location.phone}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2" />
                          {location.hours}
                        </div>
                      </div>

                      <div className="border-t border-border pt-4">
                        <p className="text-sm font-semibold mb-2">Faciliteiten:</p>
                        <div className="flex flex-wrap gap-1">
                          {location.features.map((feature, index) => (
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

export default SpaLocationsCarousel;