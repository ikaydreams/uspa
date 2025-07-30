import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const CustomerExperiencesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const experiences = [
    {
      id: 1,
      quote: "De meest ontspannende ervaring die ik ooit heb gehad. Het personeel was ongelooflijk professioneel en de faciliteiten waren absoluut prachtig.",
      author: "Maria van den Berg",
      role: "Trouwe klant sinds 2020",
      treatment: "Couples Retreat Package",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      quote: "Uspa heeft mijn verwachtingen volledig overtroffen. De hot stone massage was hemels en ik voelde me volledig vernieuwd na mijn bezoek.",
      author: "Jan Pieters",
      role: "Wellness enthusiast",
      treatment: "Hot Stone Massage Therapy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      quote: "Als drukke zakenvrouw heb ik mijn rust gevonden bij Uspa. Hun aromatherapie facial is nu een vaste maandelijkse afspraak geworden.",
      author: "Sophie de Vries",
      role: "CEO, Tech Startup",
      treatment: "Aromatherapie Facial",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      quote: "De hydrotherapie faciliteiten zijn werkelijk van wereldklasse. Ik voel me na elke sessie als herboren en klaar om de wereld aan te kunnen.",
      author: "Tom Hendriks",
      role: "Professionele atleet",
      treatment: "Hydrotherapie & Recovery",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      quote: "Mijn verjaardagsbehandeling bij Uspa was magisch. Van het moment dat ik binnenkwam tot het moment dat ik vertrok, voelde ik me als een koningin.",
      author: "Emma Jansen",
      role: "Lifestyle blogger",
      treatment: "Birthday Spa Package",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
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
            Klantenervaringen
          </h2>
          <p className="text-lg font-figtree text-muted-foreground max-w-2xl mx-auto">
            Ontdek waarom onze klanten steeds terugkomen voor de unieke Uspa-ervaring. 
            Lees hun persoonlijke verhalen en transformaties.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleSlides().map((experience, index) => (
              <Card 
                key={`${experience.id}-${currentSlide}`} 
                className={`bg-card border-border hover:shadow-elegant transition-all duration-500 animate-fade-in ${
                  index === 1 ? 'lg:scale-105 lg:shadow-elegant' : ''
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

          {/* Navigation */}
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

export default CustomerExperiencesCarousel;