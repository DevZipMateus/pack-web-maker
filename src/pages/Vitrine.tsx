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
      {/* Header with fixed 80px height */}
      <Header />
      
      {/* Main content - iframe starting below header */}
      <main className="pt-[6rem] h-screen">
        <iframe 
          src="https://liderpackembalagens.egestor.com.br/vitrine/" 
          className="w-full border-none"
          style={{ height: 'calc(100vh - 6rem)' }}
          title="Demonstração de Vitrine"
        />
      </main>
    </div>
  );
};

export default Vitrine;
