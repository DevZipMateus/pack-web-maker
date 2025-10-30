import { Button } from "@/components/ui/button";
import { Phone, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-background via-muted/30 to-background"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img
              src="/logo-liderpack.png"
              alt="Lider Pack Embalagens e Festas - Logo"
              className="h-32 md:h-40 w-auto drop-shadow-xl"
            />
          </div>

          <h1 className="mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Lider Pack Embalagens e Festas
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mb-8 leading-relaxed">
            Mais de 7 anos oferecendo embalagens, artigos para festas,
            confeitaria e produtos personalizados com qualidade e variedade
          </h2>

          <p className="text-xl md:text-2xl text-primary font-semibold mb-12 italic">
            Mais cor e sabor em sua vida!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/5538998488841"
                className="flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                (38) 99848-8841
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
            >
              <a
                href="https://www.instagram.com/liderpackembalagem?igsh=dnh3OTNwb2ZwN2o1&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="h-5 w-5" />
                @liderpackembalagens
              </a>
            </Button>
          </div>

          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Horário de atendimento:</strong>
              <br />
              Segunda a sexta: 7:30h às 17:30h
              <br />
              Sábado: 7:30h às 14:00h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
