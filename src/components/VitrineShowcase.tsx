import { Button } from "@/components/ui/button";
import { ShoppingBag, Package, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VitrineShowcase = () => {
  const navigate = useNavigate();

  return (
    <section id="vitrine-showcase" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-accent/10 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base font-semibold">Novidade</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Conheça Nossa Vitrine Online
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore nosso catálogo completo de produtos com preços atualizados, 
              disponibilidade em tempo real e muito mais!
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {[
              {
                icon: ShoppingBag,
                title: "Catálogo Completo",
                description: "Milhares de produtos de embalagens, festas e confeitaria"
              },
              {
                icon: Package,
                title: "Disponibilidade Real",
                description: "Veja o estoque atualizado de cada produto em tempo real"
              },
              {
                icon: Sparkles,
                title: "Preços Atualizados",
                description: "Consulte valores e promoções diretamente na vitrine"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 sm:p-12 text-center border border-primary/20">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Navegue pela nossa vitrine e descubra tudo que temos!
            </h3>
            <p className="text-muted-foreground mb-8 text-base sm:text-lg max-w-2xl mx-auto">
              Encontre exatamente o que precisa para suas embalagens, festas e confeitaria. 
              Navegação fácil, busca rápida e informações completas de cada produto.
            </p>
            
            <Button
              size="lg"
              onClick={() => navigate("/vitrine")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 group"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Acessar Vitrine Online
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Info Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Dica:</strong> Adicione a vitrine aos seus favoritos para acesso rápido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineShowcase;
