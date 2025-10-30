import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Dr. Osório Adrião da Rocha, 579",
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(38) 99848-8841",
      link: "https://wa.me/5538998488841",
      color: "text-secondary",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "liderpacksjp@hotmail.com",
      link: "mailto:liderpacksjp@hotmail.com",
      color: "text-accent",
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: (
        <>
          Segunda a sexta: 7:30h às 17:30h
          <br />
          Sábado: 7:30h às 14:00h
        </>
      ),
      color: "text-primary",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">Entre em contato</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender você da melhor forma possível
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <info.icon className={`h-8 w-8 ${info.color} flex-shrink-0 mt-1`} />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-foreground">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <h3 className="mb-6 text-primary">Fale conosco agora</h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Nossa equipe está pronta para ajudar você a encontrar as
                  melhores soluções em embalagens, festas e confeitaria.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8"
                  >
                    <a
                      href="https://wa.me/5538998488841"
                      className="flex items-center gap-2"
                    >
                      <Phone className="h-5 w-5" />
                      WhatsApp
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8"
                  >
                    <a
                      href="https://www.instagram.com/liderpackembalagem?igsh=dnh3OTNwb2ZwN2o1&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Instagram className="h-5 w-5" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
