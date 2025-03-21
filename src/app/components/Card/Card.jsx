"use client";
import { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import styled from 'styled-components';
import Link from 'next/link';

const Lottie = dynamic(() => import("lottie-react"), { 
  ssr: false,
  loading: () => <div className="lottie-loading">Loading...</div>
});

// Import animations
import BubblesAnimation from '../../../../public/animations/Roof washing.json';
import ManCleaningWindow from '../../../../public/animations/residential-window.json';
import Gutter from "../../../../public/animations/Man doing Gutter Cleaning.json";
import Professional from "../../../../public/animations/Professional Cleaner.json";
import Stain from "../../../../public/animations/stain-cleaning.json";
import Check from "../../../../public/animations/House wash.json";
import waterdrop from '../../../../public/animations/Floor Washing.json';

const ServicesSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cardsData = [
    {
      id: 1,
      name: "Pressure Washing",
      about: "Professional exterior cleaning for homes and driveways",
      link: "/pressure-washing",
      animationData: Professional,
    },
    {
      id: 2,
      name: "House Washing",
      about: "Safe and effective roof stain removal services",
      animationData: Check,
      link: "/house-washing"
    },
    {
      id: 3,
      name: "Gutter Cleaning",
      about: "Complete gutter cleaning and protection solutions",
      link: "/gutter-cleaning",
      animationData: Gutter,
    },
    {
      id: 4,
      name: "Window Cleaning",
      about: "Streak-free window cleaning services",
      link: "/window-cleaning-cincinnati",
      animationData: ManCleaningWindow,
    },
    {
      id: 5,
      name: "Roof Washing",
      about: "Deck cleaning and sealing services",
      link: "/roof-washing",
      animationData: BubblesAnimation,
    },
    {
      id: 6,
      name: "Seal Solutions",
      about: "Driveway and sidewalk deep cleaning",
      link: "/seal-solutions",
      animationData: Stain,
    },
  ];

  if (!isMounted) return null;

  return (
    <SectionContainer>
      <HeaderWrapper>
        <HeadingContainer>
          <AnimatedHeading>
            Our Residential Services
          </AnimatedHeading>
          <WaterdropAnimation>
            <Lottie 
              animationData={waterdrop} 
              rendererSettings={{ 
                preserveAspectRatio: 'xMidYMid meet',
                transparent: true
              }}
              style={{ width: '100%', height: '100%' }}
            />
          </WaterdropAnimation>
        </HeadingContainer>
      </HeaderWrapper>
      
      <CardsGrid>
        {cardsData.map(card => (
          <Card
            key={card.id}
            name={card.name}
            about={card.about}
            animationData={card.animationData}
            link={card.link}
          />
        ))}
      </CardsGrid>
    </SectionContainer>
  );
};

const LottieWrapper = ({ animationData }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      rendererSettings={{
        preserveAspectRatio: 'xMidYMid meet',
        transparent: true
      }}
      style={{ 
        width: '100%', 
        height: '100%',
        overflow: 'visible'
      }}
    />
  );
};

const Card = ({ animationData, name, about, link }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <StyledWrapper>
      <div className="card mb-10">
        <div className="animation-container">
          <LottieWrapper animationData={animationData} />
        </div>

        <div className="content-wrapper">
          <h3 className="service-title">{name}</h3>
          <p className="service-description">{about}</p>
          <Link href={link || "#"} className="learn-more-btn">
            Learn More
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
};

// Styled Components
const SectionContainer = styled.section`
  background: #fff;
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: visible;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 3rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const AnimatedHeading = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(to right, #00C6F9, #0062FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    white-space: normal;
    text-align: center;
  }
`;

const WaterdropAnimation = styled.div`
  width: 120px;
  height: 120px;
  position: relative;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
`;

const StyledWrapper = styled.div`
  .card {
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 198, 249, 0.1);
    transition: all 0.3s ease;
    overflow: visible;
    position: relative;
    height: 400px;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 40px rgba(0, 198, 249, 0.2);
    }
  }

  .animation-container {
    width: 100%;
    height: 250px;
    position: relative;
    overflow: visible;
    border-radius: 20px 20px 0 0;
    background: #f8f9fa;
  }

  .content-wrapper {
    padding: 1.5rem;
    text-align: center;
  }

  .service-title {
    color: #2d3748;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  .service-description {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.2rem;
  }

  .learn-more-btn {
    display: inline-block;
    background: #00C6F9;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      background: #0099cc;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    .card {
      height: auto;
    }

    .animation-container {
      height: 200px;
    }
  }
`;

export default ServicesSection;