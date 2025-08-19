import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactAndBullfrogSection: FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-poppins font-bold text-center mb-8">
          Heeft u vragen of wilt u een afspraak maken? Neem contact met ons op en ons team helpt u graag verder.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Build by Bullfrog Section (Left) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-poppins font-semibold">Gebouwd door Bullfrog</h3>
            <p className="text-base font-sans text-muted-foreground">
              Bullfrog Spas worden ontworpen en geproduceerd in de VS met een focus op kwaliteit, innovatie en energie-efficiëntie. De gepatenteerde JetPak-technologie biedt aanpasbare massage-ervaringen, afgestemd op uw wensen. Elke spa is gebouwd met duurzaamheid en stijl, voor een premium wellness-ervaring thuis.
            </p>
            <div className="relative w-full" style={{ paddingTop: "56.25%" /* 16:9 Aspect Ratio */ }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/VIDEO_ID" // Vervang met de echte Bullfrog-video-URL van u-spawellness.nl
                title="Bullfrog Spas Overzicht"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Contact Details (Right) */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Telefoon</h3>
                    <p className="font-sans text-muted-foreground">+31 (0) 85 022 0799</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">E-mail</h3>
                    <p className="font-sans text-muted-foreground">info@u-spawellness.nl</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Adres</h3>
                    <p className="font-sans text-muted-foreground">
                      De Amstel 15<br />
                      8253 PC Dronten, Nederland
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAndBullfrogSection;
