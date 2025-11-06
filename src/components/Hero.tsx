import { Button } from "@/components/ui/button";
import { Phone, Instagram, ShoppingBag } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <img
              src="/logo-liderpack.png"
              alt="Lider Pack Embalagens e Festas - Logo"
              className="h-24 sm:h-32 md:h-40 w-auto drop-shadow-xl"
            />
          </div>

          <h1 className="mb-4 sm:mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Lider Pack Embalagens e Festas
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
            Mais de 7 anos oferecendo embalagens, artigos para festas,
            confeitaria e produtos personalizados com qualidade e variedade
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-8 sm:mb-12 italic">
            Mais cor e sabor em sua vida!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/5538998488841"
                className="flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                (38) 99848-8841
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/vitrine")}
              className="border-2 border-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
              Ver Vitrine Online
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              <a
                href="https://www.instagram.com/liderpackembalagem?igsh=dnh3OTNwb2ZwN2o1&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                @liderpackembalagens
              </a>
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-border">
            <p className="text-muted-foreground text-sm sm:text-base">
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
