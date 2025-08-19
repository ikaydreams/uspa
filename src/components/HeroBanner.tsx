import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "U-Spa: Premium Bullfrog Spa’s",
      description: "Ervaar design en comfort met JetPak-technologie, de zuinigste en stilste spa’s ter wereld.",
      image: "/U-Spa-visual.jpg",
    },
    {
      id: 2,
      title: "Uw Persoonlijke Wellness",
      description: "Geniet van massages op maat met 16 verwisselbare JetPaks, geschikt voor elke lichaamslengte.",
      image: "/Girl.jpg",
    },
    {
      id: 3,
      title: "Stressvrij Genieten",
      description: "U-Spa levert en onderhoudt uw droomspa voor een exclusieve wellness-ervaring thuis.",
      image: "/Woman.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
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
              backgroundImage: `url(${slide.image || "https://via.placeholder.com/1200x600"})`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl font-figtree mb-8 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <div className="flex flex-col items-center space-y-4">
                  <Button
                    size="lg"
                    className="bg-foreground text-background hover:bg-foreground/90 font-figtree font-semibold w-full max-w-xs"
                  >
                    Ontdek Onze Producten
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-black font-figtree font-semibold bg-transparent w-full max-w-xs"
                  >
                    Neem Contact Op
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 md:p-4 rounded-full transition-colors duration-200"
      >
        <ChevronLeft size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 md:p-4 rounded-full transition-colors duration-200"
      >
        <ChevronRight size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

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
