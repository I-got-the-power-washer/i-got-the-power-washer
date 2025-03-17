"use client"
import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaGoogle,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import Bubble from "../../../../public/animations/Bubbles.json"; // Adjust path as needed
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const FooterU = () => {
  return (
    <footer className="bg-white text-[#00C6F9] py-10 px-4 relative">
       <div className="absolute inset-0 z-0 opacity-50 overflow-hidden">
        <Lottie
          animationData={Bubble}
          loop={true}
          speed={0.1}
          style={{ 
            width: '100%',
            height: '100%',
            transform: 'scale(2)' // Scale up the animation
          }}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice' // Cover entire area
          }}
          // className="hidden md:block" // Only show on desktop
        />
        {/* Mobile version remains unscaled */}
        {/* <Lottie
          animationData={Bubble}
          loop={true}
          style={{ width: '100%', height: '100%' }}
          className="md:hidden" // Only show on mobile
        /> */}
      </div>
      <div className=" relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0 ">
        {/* Logo and Social Media Section */}
        <div className="flex flex-col sm:items-start items-center space-y-4 md:w-1/3">
          <div className="flex flex-col sm:items-start items-center">
            <a href="/">
              <img
                src="/images/uft.png"
                alt="Eyez on the Prize Logo"
                className="w-32 h-auto"
              />
            </a>
          </div>

          <div className="flex space-x-4 text-[#00C6F9] text-xl ">
            <a href="https://www.facebook.com/EyezPrizeAutoSpa" target="_blank" rel="noopener noreferrer" className="hover:text-[#912ED9]">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/eyezontheprizeautospa/#" target="_blank" rel="noopener noreferrer" className="hover:text-[#912ED9]">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@eyezontheprizeautospa" target="_blank" rel="noopener noreferrer" className="hover:text-[#912ED9]">
              <FaTiktok />
            </a>
            <a href="https://www.google.com/search?q=Eyez+On+The+Prize+Auto-Spa" target="_blank" rel="noopener noreferrer" className="hover:text-[#912ED9]">
              <FaGoogle />
            </a>
            <a href="https://www.youtube.com/@eyezontheprizeautospa" target="_blank" rel="noopener noreferrer" className="hover:text-[#912ED9]">
              <FaYoutube />
            </a>
          </div>

          {/* Business Info Heading Moved Below Social Icons */}
          <h4 className="font-semibold text-[#00C6F9] uppercase tracking-wide pt-4 pb-1 border-b border-dotted border-[#00C6F9]">
            Business Info
          </h4>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-[#00C6F9]" />
              <a href="tel:+19803070431">(980) 307-0431</a>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-[#00C6F9]" />
              <a href="mailto:eyezontheprizeautospa@gmail.com">eyezontheprize@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Pages, Services, and Additional Services Sections */}
        <div className="flex flex-col sm:flex-row items-start justify-between w-full md:w-2/3 space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="flex flex-col sm:items-start space-y-2">
            <h4 className="font-semibold text-[#00C6F9] uppercase tracking-wide pb-1 border-b border-dotted border-[#00C6F9]">
              Pages
            </h4>
            <a href="/">Home</a>
            <a href="/about-us">About</a>
            <a href="/services">Services</a>
            <a href="/service-areas">Service Areas</a>
            <a href="/gallery">Portfolio</a>
            <a href="/contact-us">Contact</a>
            <a href="https://book.squareup.com/appointments" className="hover:text-[#00C6F9]">Book Online</a>
            <a href="/plans">Plans</a>
          </div>

          <div className="flex flex-col sm:items-start space-y-2">
            <h4 className="font-semibold text-[#00C6F9] uppercase tracking-wide pb-1 border-b border-dotted border-[#00C6F9]">
              Services
            </h4>
            <a href="/services/polishing">Polishing</a>
            <a href="/services/ceramic-coating">Ceramic Coating</a>
            <a href="/services/exterior-detailing">Exterior Detailing</a>
            <a href="/services/interior-detailing">Interior Detailing</a>
          </div>

          <div className="flex flex-col sm:items-start space-y-2">
            <h4 className="font-semibold text-[#00C6F9] uppercase tracking-wide pb-1 border-b border-dotted border-[#00C6F9]">
              Additional Services
            </h4>
            <a href="/services/upholstery-cleaning">Upholstery Cleaning</a>
            <a href="/services/engine-bay-detailing">Engine Bay Detailing</a>
            <a href="/services/rv-detailing">RV Detailing</a>
            <a href="/services/boating-detailing">Boating Detailing</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-[#00C6F9] pt-4 text-center text-sm text-[#00C6F9]">
        <p>© I got the Power Washer 2025</p>
      </div>
    </footer>
  );
};

export default FooterU;
