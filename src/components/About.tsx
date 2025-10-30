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
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">Sobre a Lider Pack</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experiência e dedicação em cada produto e atendimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="text-primary">Nossa missão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Proporcionar aos nossos clientes a melhor experiência em
                  produtos e serviços, oferecendo variedade, qualidade e
                  agilidade, com foco na satisfação e no fortalecimento de
                  parcerias duradouras.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-8 w-8 text-secondary" />
                  <h3 className="text-secondary">Nossa visão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como referência em embalagens e artigos
                  personalizados, destacando-nos pela confiança, variedade e
                  excelência no atendimento, fortalecendo nossa presença em
                  nossa cidade e microrregião.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h3 className="text-center mb-8 text-primary">Nossos valores</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border border-border hover:border-primary/50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold text-lg mb-2 text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Card className="border border-border inline-block">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
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
            <CardContent className="p-8 md:p-12">
              <h3 className="mb-6 text-primary text-center">Nossa história</h3>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4 leading-relaxed">
                  A Lider Pack Embalagens nasceu da experiência de mais de{" "}
                  <strong className="text-foreground">
                    20 anos de atuação no ramo comercial
                  </strong>
                  , consolidando-se como uma empresa sólida e comprometida com a
                  excelência.
                </p>
                <p className="mb-4 leading-relaxed">
                  Com mais de <strong className="text-foreground">7 anos de mercado</strong>,
                  destacamo-nos pela variedade de produtos e pela dedicação em
                  oferecer embalagens, artigos para festas, confeitaria e
                  produtos personalizados que unem qualidade, praticidade e
                  inovação.
                </p>
                <p className="leading-relaxed">
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
