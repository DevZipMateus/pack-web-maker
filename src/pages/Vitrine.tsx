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
    <div className="h-screen overflow-hidden flex flex-col pt-20">
      {/* Header with fixed 80px height */}
      <Header />
      
      {/* Main content - iframe with calculated height */}
      <main className="flex-1 w-full">
        <iframe 
          src="https://liderpackembalagens.egestor.com.br/vitrine/" 
          className="w-full h-full border-none"
          style={{ height: 'calc(100vh - 80px)' }}
          title="Demonstração de Vitrine"
        />
      </main>
    </div>
  );
};

export default Vitrine;
