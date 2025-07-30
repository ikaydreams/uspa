import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const FeaturedTreatmentsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const treatments = [
    {
      id: 1,
      name: "Hot Stone Massage",
      description: "Diepe ontspanning met verwarmde basaltstenen die spieren losser maken en stress wegneemt.",
      price: "€85",
      duration: "60 min",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Aromatherapie Facial",
      description: "Luxe gezichtsbehandeling met natuurlijke essentiële oliën voor een stralende huid.",
      price: "€95",
      duration: "75 min",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Couples Retreat",
      description: "Romantische spa-ervaring voor twee personen met champagne en chocolade.",
      price: "€180",
      duration: "90 min",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Detox Body Wrap",
      description: "Zuiverende body wrap met natuurlijke ingrediënten voor huidvernieuwing.",
      price: "€70",
      duration: "45 min",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % treatments.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + treatments.length) % treatments.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Uitgelichte Behandelingen
          </h2>
          <p className="text-lg font-figtree text-muted-foreground max-w-2xl mx-auto">
            Ontdek onze meest populaire spa-behandelingen, zorgvuldig samengesteld 
            door onze experts voor de ultieme welzijnservaring.
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {treatments.map((treatment, index) => (
                <div key={treatment.id} className="w-full flex-shrink-0">
                  <Card className="bg-card border-border mx-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative h-64 lg:h-80">
                        <img
                          src={treatment.image}
                          alt={treatment.name}
                          className="w-full h-full object-cover rounded-l-2xl"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          {treatment.price}
                        </div>
                      </div>
                      <CardContent className="p-8 flex flex-col justify-center">
                        <div className="flex items-center mb-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(treatment.rating) ? 'fill-foreground text-foreground' : 'text-muted-foreground'}`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-muted-foreground">
                            {treatment.rating} • {treatment.duration}
                          </span>
                        </div>
                        <h3 className="text-2xl font-poppins font-bold mb-4">
                          {treatment.name}
                        </h3>
                        <p className="font-figtree text-muted-foreground mb-6 leading-relaxed">
                          {treatment.description}
                        </p>
                        <Button className="w-fit font-figtree font-semibold">
                          Boek Nu
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-card border border-border hover:bg-accent text-foreground p-3 rounded-full transition-colors duration-200 shadow-soft"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-card border border-border hover:bg-accent text-foreground p-3 rounded-full transition-colors duration-200 shadow-soft"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {treatments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? "bg-foreground" : "bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreatmentsCarousel;