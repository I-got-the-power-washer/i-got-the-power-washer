import Image from "next/image";

import ServicesSection from "./components/Card/Card";
import ClientLogos from "./components/Logos/logos";
import FAQ from "./components/Faq/faq";
import RequestEstimateForm from "./components/homeForm/RequestEstimateForm";
import HomeExterior from "./components/homeExterior/homeExterior";
import CommercialServicesSection from "./components/Commercial/Commercial";
import Testimonial from "./components/Review/Review";

export default function Home() {
  return (
    <div className="">
     <ServicesSection/>
     <CommercialServicesSection/>
     <ClientLogos/>
   
     <RequestEstimateForm/>
     <HomeExterior/>
     <Testimonial/>
     <FAQ/>
     
    
    </div>
  );
}
