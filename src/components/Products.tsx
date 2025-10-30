import { Package, PartyPopper, Cake, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      icon: Package,
      title: "Embalagens",
      items: [
        "Sacolas personalizadas",
        "Sacos PEBD e PEAD",
        "Sacos kraft",
        "Bobinas picotadas",
        "Potes e frascos",
        "E muito mais...",
      ],
      color: "primary",
    },
    {
      icon: PartyPopper,
      title: "Festas",
      items: [
        "Sacolinha surpresa",
        "Pratos e copos descartáveis",
        "Acrílicos decorativos",
        "Lembracinhas",
        "Velas e TNT",
        "Fitilhos e cortinas",
      ],
      color: "secondary",
    },
    {
      icon: Cake,
      title: "Confeitaria",
      items: [
        "Chocolates premium",
        "Desmoldantes",
        "Granulados e granulê",
        "Confeitos diversos",
        "Brigadeiros",
        "Doces variados",
      ],
      color: "accent",
    },
    {
      icon: Sparkles,
      title: "Personalizados",
      items: [
        "Sacolas personalizadas",
        "Kit festa completo",
        "Toppers exclusivos",
        "Adesivos customizados",
        "Painéis decorativos",
        "Projetos especiais",
      ],
      color: "primary",
    },
  ];

  const colorClasses = {
    primary: {
      icon: "text-primary",
      border: "border-primary/30",
      hover: "hover:border-primary",
      bg: "bg-primary/5",
    },
    secondary: {
      icon: "text-secondary",
      border: "border-secondary/30",
      hover: "hover:border-secondary",
      bg: "bg-secondary/5",
    },
    accent: {
      icon: "text-accent",
      border: "border-accent/30",
      hover: "hover:border-accent",
      bg: "bg-accent/5",
    },
  };

  return (
    <section id="produtos" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="mb-3 sm:mb-4 text-primary text-2xl sm:text-3xl md:text-4xl font-bold">Nossos produtos</h2>
            <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-4 sm:mb-6" />
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Variedade e qualidade para atender todas as suas necessidades
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {products.map((product, index) => {
              const colors = colorClasses[product.color as keyof typeof colorClasses];
              return (
                <Card
                  key={index}
                  className={`border-2 ${colors.border} ${colors.hover} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <CardHeader className={colors.bg}>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <product.icon className={`h-8 w-8 sm:h-10 sm:w-10 ${colors.icon} flex-shrink-0`} />
                      <CardTitle className="text-xl sm:text-2xl">{product.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 sm:pt-6">
                    <ul className="space-y-2 sm:space-y-3">
                      {product.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base"
                        >
                          <span className={`mt-1.5 h-2 w-2 rounded-full ${colors.icon.replace('text-', 'bg-')} flex-shrink-0`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-12 text-center px-4">
            <Card className="inline-block border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 max-w-full">
              <CardContent className="p-5 sm:p-8">
                <p className="text-base sm:text-lg text-muted-foreground">
                  Não encontrou o que procura?{" "}
                  <a
                    href="https://wa.me/5538998488841"
                    className="text-primary font-semibold hover:underline"
                  >
                    Entre em contato
                  </a>{" "}
                  e fale com nossa equipe!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
