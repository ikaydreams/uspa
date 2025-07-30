import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Neem Contact Op
          </h2>
          <p className="text-lg font-figtree text-muted-foreground max-w-2xl mx-auto">
            Heeft u vragen of wilt u een afspraak maken? Neem contact met ons op 
            en ons team helpt u graag verder.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-poppins text-2xl">Stuur ons een bericht</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-figtree font-medium mb-2">
                      Voornaam
                    </label>
                    <Input placeholder="Uw voornaam" />
                  </div>
                  <div>
                    <label className="block text-sm font-figtree font-medium mb-2">
                      Achternaam
                    </label>
                    <Input placeholder="Uw achternaam" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-figtree font-medium mb-2">
                    E-mailadres
                  </label>
                  <Input type="email" placeholder="uw.email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-figtree font-medium mb-2">
                    Telefoonnummer
                  </label>
                  <Input type="tel" placeholder="06 12 34 56 78" />
                </div>
                <div>
                  <label className="block text-sm font-figtree font-medium mb-2">
                    Bericht
                  </label>
                  <Textarea 
                    placeholder="Uw bericht of vraag..."
                    className="min-h-[120px] resize-none"
                  />
                </div>
                <Button className="w-full font-figtree font-semibold">
                  Verstuur Bericht
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Telefoon</h3>
                    <p className="font-figtree text-muted-foreground">+31 20 123 4567</p>
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
                    <p className="font-figtree text-muted-foreground">info@uspa.nl</p>
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
                    <p className="font-figtree text-muted-foreground">
                      Wellness Street 123<br />
                      1234 AB Amsterdam
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Openingstijden</h3>
                    <div className="font-figtree text-muted-foreground">
                      <p>Ma - Vr: 09:00 - 21:00</p>
                      <p>Za - Zo: 10:00 - 18:00</p>
                    </div>
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

export default ContactSection;