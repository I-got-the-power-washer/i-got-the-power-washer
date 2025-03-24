"use client";
import { useRef } from "react";

import animationData from "../../../../public/animations/loading-page.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { 
  ssr: false,
  loading: () => <div className="lottie-loading"></div>
});

const Loader = ({ onFinish }) => {
  const lottieRef = useRef();

  const handleComplete = () => {
    onFinish(); // call parent to remove loader
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center h-[100vh] overflow-hidden">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        onComplete={handleComplete}
      />
    </div>
  );
};

export default Loader;
