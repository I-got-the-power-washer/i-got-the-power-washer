"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa"; // Importing phone icon
import Link from "next/link";

const HomeExterior = () => {
  const controls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    controls.start("visible");
    textControls.start("visible");
  }, [controls, textControls]);

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] max-w-5xl w-full">
        {/* Left Side (Image) */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="p-6 flex items-center justify-center"
        >
          <motion.img
            src="/images/WhatsApp-Image-2023-09-06-at-18.42.05.jpg"
            alt="Junk Removal Florida"
            className="w-full h-full object-cover border-4 rounded-lg"
            style={{ borderColor: "#00C6F9" }} // Blue border
            variants={imageVariants}
          />
        </motion.div>

        {/* Right Side (Text Content) */}
        <motion.div
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          className="p-10 flex flex-col justify-start text-black"
        >
          <motion.span
            className="inline-block text-2xl uppercase border-b-4 mb-6 text-[#00C6F9]"
            style={{ width: "fit-content", borderColor: "#00C6F9" }}
            variants={textVariants}
          >
            Need Of Pressure Washing near Cincinnati?
          </motion.span>

      

          <motion.p
            className="mt-4 text-lg opacity-90 text-justify"
            variants={textVariants}
          >
            IGotThePowerWasher has the power to clean up your dirty exterior. Our licensed and insured power washing company is the one to trust for top-of-the-line work. We specialize in pressure washing services for both homes and businesses in Cincinnati, OH and the surrounding area. You’ll feel confident knowing that we’ll complete your job right the first time.
          </motion.p>
          <motion.p
            className="mt-4 text-lg opacity-90 text-justify"
            variants={textVariants}
          >
           We’ve proudly transformed thousands of properties and can’t wait to make yours the next success story! Don’t just take our word for it-read our amazing reviews here!
          </motion.p>

          <motion.div>
            <motion.button
              className="inline-flex w-auto rounded-xl mt-6 px-6 py-3 text-black font-semibold uppercase items-center bg-[#00C6F9] hover:bg-white hover:text-[#00C6F9] transition"
              variants={textVariants}
            >
              <FaPhoneAlt className="mr-2" />
              <Link href="tel:+15135700355">(513) 570-0355</Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeExterior;
