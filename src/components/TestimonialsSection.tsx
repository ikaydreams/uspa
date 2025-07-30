import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah van Berg",
      rating: 5,
      text: "Absoluut geweldige ervaring! De behandelingen zijn van topkwaliteit en het personeel is zeer professioneel. Ik kom hier regelmatig voor mijn massage therapie.",
      treatment: "Massage Therapie"
    },
    {
      name: "Michael de Vries",
      rating: 5,
      text: "De hydrotherapie faciliteiten zijn fantastisch. Een echte oase van rust midden in de stad. Zeer aan te bevelen voor iedereen die wil ontspannen.",
      treatment: "Hydrotherapie"
    },
    {
      name: "Emma Jansen",
      rating: 5,
      text: "Mijn gezichtsbehandeling was perfect! Mijn huid voelt zo zacht en stralend. Het team weet echt waar ze mee bezig zijn.",
      treatment: "Gezichtsbehandeling"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-lg font-figtree text-muted-foreground max-w-2xl mx-auto">
            Lees de ervaringen van onze tevreden klanten en ontdek waarom 
            zij kiezen voor Uspa voor hun welzijn en ontspanning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-foreground text-foreground"
                    />
                  ))}
                </div>
                <p className="font-figtree text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <h4 className="font-poppins font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="font-figtree text-sm text-muted-foreground">
                    {testimonial.treatment}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;