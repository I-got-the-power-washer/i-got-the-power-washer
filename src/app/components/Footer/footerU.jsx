"use client";
import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaGoogle,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
  FaSearchLocation,
  FaLocationArrow,
} from "react-icons/fa";
import Bubble from "../../../../public/animations/Bubbles.json"; // Adjust path as needed
import dynamic from "next/dynamic";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import Image from "next/image";
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
            width: "100%",
            height: "100%",
            transform: "scale(2)", // Scale up the animation
          }}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice", // Cover entire area
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
        <div className="flex flex-col sm:items-start  space-y-4 md:w-1/3">
          <div className="flex flex-col sm:items-start items-center">
            <a href="/">
              <img
                src="/images/uft.png"
                alt="I got the power washer"
                className="w-32 h-auto"
              />
            </a>
          </div>

          <div className="flex space-x-4 text-[#00C6F9] text-xl ">
            <a
              href="https://www.facebook.com/tony.werner.94402?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#abd7f5]"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/igotthepowerwasher/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ce6b6b]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@igotthepowerwasher"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#070607]"
            >
              <FaTiktok />
            </a>
          </div>

          {/* Business Info Heading Moved Below Social Icons */}
          <div className="mb-8">
            {/* Social Icons */}

            {/* Small Image */}
            <div className=" my-6">
              <Image
                src="/images/footer-image.png"
                alt="Quality Guarantee Badge"
                width={100}
                height={100}
                className="rounded-lg border-2 border-[#00C6F9]/20"
              />
            </div>

            {/* Business Info Heading */}
            <h4 className="font-semibold text-[#00C6F9] uppercase tracking-wide pt-4 pb-1 border-b border-dotted border-[#00C6F9] ">
              Business Info
            </h4>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-[#00C6F9]" />
              <a href="tel:5135700355">(513) 570-0355</a>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-[#00C6F9]" />
              <a href="mailto:igotthepowerwasher@gmail.com">
                igotthepowerwasher@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaLocationArrow className="text-[#00C6F9]" />
              <a>3640 Werk Rd. Cincinnati, Ohio 45248</a>
            </div>
          </div>
        </div>

        {/* Pages, Services, and Additional Services Sections */}
        <div className="flex flex-col sm:flex-row items-start justify-between w-full md:w-2/3 space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="flex flex-col sm:items-start space-y-2">
            <h4 className="font-semibold text-[#00C6F9] uppercase tracking-wide pb-1 border-b border-dotted border-[#00C6F9]">
              Residential Services
            </h4>
            <a href="/pressure-washing">Pressure Washing</a>
            <a href="/concrete-sealing">Concrete Sealing</a>
            <a href="/house-washing">House Washing</a>
            <a href="/roof-washing">Roof Washing</a>
            <a href="/window-cleaning-cincinnati">Window Cleaning</a>
            <a href="/gutter-cleaning">Gutter Cleaning</a>
          </div>

          <div className="flex flex-col sm:items-start space-y-2">
            <h4 className="font-semibold text-[#00C6F9] uppercase tracking-wide pb-1 border-b border-dotted border-[#00C6F9]">
              Commercial Services
            </h4>
            <a href="/building-wash">Building Wash</a>
            <a href="/commercial-pressure-washing">
              Commercial Pressure Washing
            </a>
            <a href="/commercial-gutter-cleaning">Commercial Gutter Cleaning</a>
            <a href="/commercial-window-cleaning">Commercial Window Cleaning</a>
            <a href="/restaurant">Restaurant</a>
            <a href="/stain-removal">Stain Removal</a>
            <a href="/parking-lot-maintenance">Parking Lot Maintenance</a>
            <a href="/post-construction-clean-up">Post Construction Clean Up</a>
          </div>

          <div className="flex flex-col sm:items-start space-y-2">
            <h4 className="font-semibold text-[#00C6F9] uppercase tracking-wide pb-1 border-b border-dotted border-[#00C6F9]">
              Pages
            </h4>
            <a href="/">Home</a>
            <a href="/the-clean-team">Our Team</a>
            <a href="/services">Services</a>
            <a href="gallery">Gallery</a>
            <a href="/reviews">Reviews</a>
            <a href="/contact-us">Contact Us</a>
            <a href="/blogs">Blogs</a>
            <a href="/career">Career</a>
            <a href="/pay-here">Pay Here</a>
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
