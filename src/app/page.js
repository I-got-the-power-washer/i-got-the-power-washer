import Image from "next/image";

import ServicesSection from "./components/Card/Card";
import ClientLogos from "./components/Logos/logos";
import FAQ from "./components/Faq/faq";
import RequestEstimateForm from "./components/homeForm/RequestEstimateForm";
import HomeExterior from "./components/homeExterior/homeExterior";

export default function Home() {
  return (
    <div className="">
     <ServicesSection/>
     <ClientLogos/>
   
     <RequestEstimateForm/>
     <HomeExterior/>
     <FAQ/>
     
    
    </div>
  );
}
