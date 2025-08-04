import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Updated slides to focus on spa devices
  const slides = [
    {
      id: 1,
      title: "Premium Spa-apparaten",
      subtitle: "Professionele Kwaliteit voor Thuis",
      description: "Ontdek onze innovatieve wellness-technologie voor een luxe spa-ervaring in uw eigen huis",
      image: "/U-Spa-visual.jpg"
    },
    {
      id: 2,
      title: "Revolutionaire Wellness Tech",
      subtitle: "Geavanceerde Technologie voor Thuisgebruik",
      description: "Ervaar professionele resultaten met onze klinisch geteste apparatuur",
      image: "/Girl.jpg"
    },
    {
      id: 3,
      title: "Spa Technologie Heruitgevonden",
      subtitle: "Medisch Grade Apparatuur voor Particulieren",
      description: "Transformeer elke ruimte tot een persoonlijk wellness-centrum met onze apparaten",
      image: "/Woman.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat relative"
            style={{ 
              backgroundImage: `url(${slide.image || "https://via.placeholder.com/1200x600"})`
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-4">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl font-poppins mb-6">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl font-figtree mb-8 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <div className="space-x-4">
                  <Button 
                    size="lg" 
                    className="bg-foreground text-background hover:bg-foreground/90 font-figtree font-semibold"
                  >
                    Ontdek Onze Producten
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-black font-figtree font-semibold bg-transparent"
                  >
                    Bestel Nu
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
