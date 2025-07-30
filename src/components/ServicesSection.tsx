import { Card, CardContent } from "@/components/ui/card";
import { Waves, Sparkles, Heart, Flower } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Waves className="w-12 h-12" />,
      title: "Hydrotherapie",
      description: "Ontspan in onze luxe hydrotherapie faciliteiten met mineraalrijke baden en jets voor ultieme ontspanning."
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Gezichtsbehandelingen",
      description: "Professionele gezichtsbehandelingen met premium producten voor een stralende en gezonde huid."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Massage Therapie",
      description: "Diverse massagetechnieken door ervaren therapeuten voor complete lichamelijke en mentale ontspanning."
    },
    {
      icon: <Flower className="w-12 h-12" />,
      title: "Aromatherapie",
      description: "Natuurlijke aromatherapie behandelingen met essentiële oliën voor balans van lichaam en geest."
    }
  ];

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Onze Diensten
          </h2>
          <p className="text-lg font-figtree text-muted-foreground max-w-2xl mx-auto">
            Ontdek ons uitgebreide aanbod van spa-diensten, zorgvuldig samengesteld 
            om u de ultieme ontspanningservaring te bieden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-foreground mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold mb-4">
                  {service.title}
                </h3>
                <p className="font-figtree text-muted-foreground leading-relaxed">
                  {service.description}
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