'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const HeroSection = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/animations/Droplit.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto pl-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Transform Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Leverage our innovative solutions to drive growth and maximize your 
              digital potential. Discover how we can help you achieve your goals 
              with cutting-edge technology.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg w-fit transition-colors duration-300">
              Get Started
            </button>
          </div>

          {/* Right Column - Animation */}
          <div className="order-1 md:order-2 relative h-96 md:h-[600px]">
            {animationData ? (
              <Lottie
                animationData={animationData}
                loop={true}
                className="w-full h-full"
                rendererSettings={{
                  preserveAspectRatio: 'xMidYMid meet'
                }}
              />
            ) : (
              <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;