import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#sobre" },
    { label: "Produtos", href: "#produtos" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary/95 to-secondary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <img
              src="/logo-liderpack.png"
              alt="Lider Pack Embalagens e Festas"
              className="h-14 sm:h-16 w-auto mb-3 sm:mb-4"
            />
            <p className="text-primary-foreground/90 text-xs sm:text-sm leading-relaxed">
              Mais de 7 anos oferecendo embalagens, artigos para festas e
              confeitaria com qualidade e variedade.
            </p>
            <p className="text-primary-foreground font-semibold mt-2 sm:mt-3 italic text-sm sm:text-base">
              Mais cor e sabor em sua vida!
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-primary-foreground">
              Links rápidos
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-primary-foreground">
              Contato
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-xs sm:text-sm">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/5538998488841"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  (38) 99848-8841
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:liderpacksjp@hotmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  liderpacksjp@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Av. Dr. Osório Adrião da Rocha, 579
                </span>
              </li>
            </ul>
          </div>

          {/* Horário e Redes Sociais */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-primary-foreground">
              Horário de atendimento
            </h3>
            <div className="flex items-start gap-2 text-xs sm:text-sm mb-4 sm:mb-6">
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0" />
              <div className="text-primary-foreground/80">
                <p>Segunda a sexta: 7:30h às 17:30h</p>
                <p>Sábado: 7:30h às 14:00h</p>
              </div>
            </div>

            <h4 className="font-semibold mb-2 sm:mb-3 text-primary-foreground text-sm sm:text-base">
              Redes sociais
            </h4>
            <a
              href="https://www.instagram.com/liderpackembalagem?igsh=dnh3OTNwb2ZwN2o1&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-sm"
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              @liderpackembalagens
            </a>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-primary-foreground/20 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-xs sm:text-sm text-primary-foreground/70 text-center sm:text-left">
            <p>
              © {currentYear} Lider Pack Embalagens e Festas. Todos os direitos
              reservados.
            </p>
            <p>CNPJ: 19.314.678/0001-77</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
