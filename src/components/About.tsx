import { Target, Eye, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Comprometimento",
      description: "Atuamos com responsabilidade e dedicação em cada atendimento",
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Buscamos constantemente aprimorar nossos produtos e serviços",
    },
    {
      icon: Heart,
      title: "Inovação",
      description: "Acompanhamos tendências para oferecer soluções modernas e criativas",
    },
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="mb-3 sm:mb-4 text-primary text-2xl sm:text-3xl md:text-4xl font-bold">Sobre a Lider Pack</h2>
            <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-4 sm:mb-6" />
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Experiência e dedicação em cada produto e atendimento
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-10 sm:mb-12 md:mb-16">
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                  <h3 className="text-primary text-lg sm:text-xl md:text-2xl font-bold">Nossa missão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Proporcionar aos nossos clientes a melhor experiência em
                  produtos e serviços, oferecendo variedade, qualidade e
                  agilidade, com foco na satisfação e no fortalecimento de
                  parcerias duradouras.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-secondary flex-shrink-0" />
                  <h3 className="text-secondary text-lg sm:text-xl md:text-2xl font-bold">Nossa visão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Ser reconhecida como referência em embalagens e artigos
                  personalizados, destacando-nos pela confiança, variedade e
                  excelência no atendimento, fortalecendo nossa presença em
                  nossa cidade e microrregião.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-10 sm:mb-12 md:mb-16">
            <h3 className="text-center mb-6 sm:mb-8 text-primary text-xl sm:text-2xl md:text-3xl font-bold">Nossos valores</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border border-border hover:border-primary/50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <value.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                    <h4 className="font-bold text-base sm:text-lg mb-2 text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 sm:mt-8 text-center px-4">
              <Card className="border border-border inline-block max-w-full">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                    <strong className="text-foreground">Preço justo:</strong>{" "}
                    Garantimos o equilíbrio entre qualidade, custo e valor.
                    <br />
                    <strong className="text-foreground">
                      Respeito e parceria:
                    </strong>{" "}
                    Construímos relações transparentes com clientes,
                    fornecedores e colaboradores.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <h3 className="mb-4 sm:mb-6 text-primary text-center text-xl sm:text-2xl md:text-3xl font-bold">Nossa história</h3>
              <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-muted-foreground">
                <p className="mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  A Lider Pack Embalagens nasceu da experiência de mais de{" "}
                  <strong className="text-foreground">
                    20 anos de atuação no ramo comercial
                  </strong>
                  , consolidando-se como uma empresa sólida e comprometida com a
                  excelência.
                </p>
                <p className="mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Com mais de <strong className="text-foreground">7 anos de mercado</strong>,
                  destacamo-nos pela variedade de produtos e pela dedicação em
                  oferecer embalagens, artigos para festas, confeitaria e
                  produtos personalizados que unem qualidade, praticidade e
                  inovação.
                </p>
                <p className="leading-relaxed text-sm sm:text-base">
                  Mais do que vender produtos, buscamos construir{" "}
                  <strong className="text-foreground">parcerias de confiança</strong>, oferecendo
                  um atendimento diferenciado e soluções que atendem às
                  necessidades de cada cliente — desde pequenos produtores e
                  comércios locais até confeitarias, padarias e organizadores de
                  eventos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
