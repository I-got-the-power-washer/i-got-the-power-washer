'use client';

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import dynamic from 'next/dynamic';
import animationData from '../../../../public/animations/Droplit.json';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full bg-white flex justify-center overflow-hidden">
      <div className="w-full h-full max-w-screen-xl mx-auto flex justify-center p-4">
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            width: '100%',
            height: '100%',
          }}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid meet'
          }}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;