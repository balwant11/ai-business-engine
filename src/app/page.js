import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionRenderer from "@/components/renderer/SectionRenderer";
import businessData from "../../business.json";

export default function Home() {
  if (!businessData || !businessData.businessData) return null;

  const bData = businessData.businessData || {};
  const layout = businessData.layout || {};
  
  return (
    <>
      <Navbar variant={layout.navbarVariant} data={bData} />
      
      <main className="flex-grow">
        <SectionRenderer 
          sections={layout.sections || []} 
          businessData={bData} 
        />
      </main>

      <Footer variant={layout.footerVariant} data={bData} />
    </>
  );
}
