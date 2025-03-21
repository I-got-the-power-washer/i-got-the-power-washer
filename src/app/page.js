import Image from "next/image";

import ServicesSection from "./components/Card/Card";
import ClientLogos from "./components/Logos/logos";
import FAQ from "./components/Faq/faq";
import RequestEstimateForm from "./components/homeForm/RequestEstimateForm";
import HomeExterior from "./components/homeExterior/homeExterior";
import CommercialServicesSection from "./components/Commercial/Commercial";
import Review from "./components/Review/Review";
import HeroSection from "./components/Hero/hero";


export default function Home() {
  return (
    <div className="">
      <HeroSection/>
     <ServicesSection/>
     <CommercialServicesSection/>
     <ClientLogos/>
   
     <RequestEstimateForm/>
     <HomeExterior/>
   <Review/>
     <FAQ/>
     
    
    </div>
  );
}
