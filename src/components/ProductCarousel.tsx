import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import carouselBalloons from "@/assets/carousel-balloons.png";
import carouselChocolate from "@/assets/carousel-chocolate.png";
import carouselCupcakes from "@/assets/carousel-cupcakes.png";
import carouselCandies from "@/assets/carousel-candies.png";
import carouselBag from "@/assets/carousel-bag.png";
import carouselGlass from "@/assets/carousel-glass.png";
import carouselBags from "@/assets/carousel-bags.png";
import carouselCake from "@/assets/carousel-cake.png";

const carouselImages = [
  { src: carouselBalloons, alt: "Balões Metalizados" },
  { src: carouselChocolate, alt: "Coberturas de Chocolate" },
  { src: carouselCupcakes, alt: "Confeitos" },
  { src: carouselCandies, alt: "Doces" },
  { src: carouselBag, alt: "Personalizados" },
  { src: carouselGlass, alt: "Taças Personalizadas" },
  { src: carouselBags, alt: "Sacolas Personalizadas" },
  { src: carouselCake, alt: "Velas de Aniversário" },
];

const ProductCarousel = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Produtos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira algumas das categorias de produtos que oferecemos
          </p>
        </div>
        
        <Carousel
          className="w-full max-w-5xl mx-auto"
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;
