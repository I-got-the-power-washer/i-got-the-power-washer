"use client";
import { useState } from "react";
import ServicesSection from "./components/Card/Card";
import ClientLogos from "./components/Logos/logos";
import FAQ from "./components/Faq/faq";
import RequestEstimateForm from "./components/homeForm/RequestEstimateForm";
import HomeExterior from "./components/homeExterior/homeExterior";
import CommercialServicesSection from "./components/Commercial/Commercial";
import Review from "./components/Review/Review";
import ResponsiveImage from "./components/Image/image";
import Loader from "./components/Loading/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      
      {loading && (
        <div className="fixed inset-0 z-50 bg-transparent">
          <Loader onFinish={() => setLoading(false)} />
        </div>
      )}

      
      <div className={`${loading ? 'opacity-100' : 'opacity-100'}`}>
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
    </div>
  );
}