
"use client";
import { useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../../../public/animations/loading-page.json";

const Loader = ({ onFinish }) => {
  const lottieRef = useRef();

  const handleComplete = () => {
    onFinish(); // call parent to remove loader
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
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
