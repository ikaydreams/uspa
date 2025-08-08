import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const experiences = [
    {
      id: 1,
      quote: "De JetPak-technologie biedt een ongeëvenaarde massage-ervaring, perfect afgestemd op mijn behoeften!",
      author: "Anneke V.",
      role: "Tevreden klant",
      treatment: "M Series Spa",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      quote: "Mijn Bullfrog Spa is een oase van rust; de installatie door U-Spa was vlekkeloos.",
      author: "Mark D.",
      role: "Wellness liefhebber",
      treatment: "A Series A9L",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      quote: "De STIL 7 past perfect in mijn moderne tuin en biedt ongeëvenaard comfort.",
      author: "Sophie K.",
      role: "Design enthousiast",
      treatment: "STIL 7 Spa",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      quote: "Dankzij U-Spa’s professionele service geniet ik dagelijks van mijn X Series spa.",
      author: "Tom R.",
      role: "Huiseigenaar",
      treatment: "X Series Spa",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      quote: "De Swim Series is perfect voor mijn fitnessroutine en familieplezier!",
      author: "Lisa M.",
      role: "Fitness coach",
      treatment: "S150 Swim Spa",
      image: "https://via.placeholder.com/150",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleSlides = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % experiences.length;
      visible.push(experiences[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-lg font-figtree text-muted-foreground max-w-2xl mx-auto">
            Ontdek waarom onze klanten steeds terugkomen voor de unieke U-Spa-ervaring.
            Lees hun persoonlijke verhalen en transformaties.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleSlides().map((experience, index) => (
              <Card
                key={`${experience.id}-${currentSlide}`}
                className={`bg-card border-border hover:shadow-elegant transition-all duration-500 animate-fade-in ${
                  index === 1 ? "lg:scale-105 lg:shadow-elegant" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-muted-foreground mb-4" />
                  <blockquote className="font-figtree text-foreground leading-relaxed mb-6 italic">
                    "{experience.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={experience.image}
                      alt={experience.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground">
                        {experience.author}
                      </h4>
                      <p className="font-figtree text-sm text-muted-foreground">
                        {experience.role}
                      </p>
                      <p className="font-figtree text-xs text-muted-foreground mt-1">
                        {experience.treatment}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-card border border-border hover:bg-accent text-foreground p-3 rounded-full transition-colors duration-200 shadow-soft"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentSlide ? "bg-foreground w-6" : "bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-card border border-border hover:bg-accent text-foreground p-3 rounded-full transition-colors duration-200 shadow-soft"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
