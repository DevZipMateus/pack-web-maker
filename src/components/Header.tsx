import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    label: "Início",
    href: "#hero"
  }, {
    label: "Sobre",
    href: "#sobre"
  }, {
    label: "Produtos",
    href: "#produtos"
  }, {
    label: "Contato",
    href: "#contato"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" onClick={e => {
          e.preventDefault();
          scrollToSection("#hero");
        }} className="flex items-center gap-3">
            <img src="/logo-liderpack.png" alt="Lider Pack Embalagens e Festas" className="h-20 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <a key={item.href} href={item.href} onClick={e => {
            e.preventDefault();
            scrollToSection(item.href);
          }} className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
                {item.label}
              </a>)}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://wa.me/5538998488841">Fale Conosco</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground hover:text-primary transition-colors" aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map(item => <a key={item.href} href={item.href} onClick={e => {
            e.preventDefault();
            scrollToSection(item.href);
          }} className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2">
                  {item.label}
                </a>)}
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                <a href="https://wa.me/5538998488841">Fale Conosco</a>
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;