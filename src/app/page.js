"use client";
import { useEffect, useState } from "react";
import ServicesSection from "./components/Card/Card";
import ClientLogos from "./components/Logos/logos";
import FAQ from "./components/Faq/faq";
import RequestEstimateForm from "./components/homeForm/RequestEstimateForm";
import HomeExterior from "./components/homeExterior/homeExterior";
import CommercialServicesSection from "./components/Commercial/Commercial";
import Review from "./components/Review/Review";

import ResponsiveImage from "./components/Image/image";
import Loader from "./components/Loading/Loading";
// import Loader from "./components/Loader"; // 👈 import loader component

export default function Home() {
  const [loading, setLoading] = useState(true);


  

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="">
          {/* <HeroSection /> */}
          <ResponsiveImage
            src="/images/Web-1-1536x1152 (1).webp"
            alt="Professional pressure washing services in Cincinnati"
            className="aspect-[4/3] w-full"
            priority={true}
          />
          <ServicesSection />
          <CommercialServicesSection />
          <ClientLogos />
          <RequestEstimateForm />
          <HomeExterior />
          <Review />
          <FAQ />
        </div>
      )}
    </>
  );
}
