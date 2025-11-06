import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    // Prevent scrolling on the main page
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <Header />
      
      {/* Main content - iframe starting right after header */}
      <main className="pt-32 h-screen">
        <iframe 
          src="https://liderpackembalagens.egestor.com.br/vitrine/" 
          className="w-full border-none"
          style={{ height: 'calc(100vh - 8rem)' }}
          title="Demonstração de Vitrine"
        />
      </main>
    </div>
  );
};

export default Vitrine;
