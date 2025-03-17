"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa"; // Importing phone icon
import Link from "next/link";
import Team from "../Team/team";

const Owner = () => {
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
    <>
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
              src="/images/owner-i-got.jpeg"
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
              Hi, I’m Tony Werner
            </motion.span>

            <motion.p
              className="mt-4 text-md opacity-90 text-justify"
              variants={textVariants}
            >
              I’m the owner and operator of IGotThePowerWasher, and I’m
              passionate about making Cincinnati shine. I moved here from
              Hamburg, Germany, in 2012, and I’ve loved calling this city home
              ever since. I started power washing six years ago, and it’s been
              an incredible journey building IGotThePowerWasher into the
              fastest-growing pressure washing company in the area.
            </motion.p>
            <motion.p
              className="mt-4 text-md opacity-90 text-justify"
              variants={textVariants}
            >
              My philosophy is simple: provide the highest quality work at the
              best price. I’m not happy until you are, and my team and I strive
              for perfection on every job. We don’t just clean—we take pride in
              transforming your property.
            </motion.p>
            <motion.p
              className="mt-4 text-md opacity-90 text-justify"
              variants={textVariants}
            >
              In addition to power washing, I also run Complete Seal Solutions,
              where we specialize in sealing a wide variety of surfaces. Whether
              it’s concrete, pavers, driveways, patios, or even pool decks,
              we’ve got you covered. Sealing is a MUST, especially here in Ohio.
              Our freeze-and-thaw cycle can wreak havoc on surfaces, causing
              them to crack, chip, and deteriorate over time. Sealing creates a
              protective barrier that shields against the elements, including
              water, UV rays, and road salt.
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
      <div className="lg:pl-45 lg:pr-45 pl-10 pr-10 flex flex-col justify-start text-black bg-white">
        <motion.p
          className="mt-4 text-md opacity-90 text-justify"
          variants={textVariants}
        >
          I’m also the owner of WashingSupply, where I’ve designed and developed
          cutting-edge pressure washing equipment. Over the years, we’ve sold
          hundreds of units, and it’s been incredible to see how this innovation
          has not only improved our own services but also helped our customers
          achieve outstanding results.
        </motion.p>
        <motion.p
          className="mt-4 text-md opacity-90 text-justify"
          variants={textVariants}
        >
          One of my favorite stories is from my very first customer. She
          actually yelled at me because my prices were too low—she paid me extra
          and said, “Next time I hire you, you better raise your prices!” Now,
          she’s a close friend with a spotless property, and that’s the kind of
          relationship I love building with my customers
        </motion.p>
        <motion.p
          className="mt-4 text-md opacity-90 text-justify"
          variants={textVariants}
        >
          If you’re looking for top-notch service, fair pricing, and a team that
          truly cares, give us a call or text at 513-570-0355 to schedule your
          free, no-obligation estimate. You can also visit us at 3640 Werk Rd.
          (right next to the USPS). Mention this story, and I’ll give you 10%
          off your first service!
        </motion.p>
        <motion.p
          className="mt-4 text-md opacity-90 text-justify"
          variants={textVariants}
        >
          Let’s keep it clean!
        </motion.p>
      </div>

      <div className="bg-white min-h-[70vh] flex items-center justify-center py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] max-w-5xl w-full">
          {/* Left Side (Image) */}

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
              Hi, I’m Tony Werner
            </motion.span>

            <motion.p
              className="mt-4 text-md opacity-90 text-justify"
              variants={textVariants}
            >
              Andrew is a committed and detail-oriented professional,
              consistently delivering high-quality results across all areas of
              our operations. As Chief Operating Officer of I Got the Power
              Washer, he plays a pivotal role in ensuring operational
              excellence, leading our team with a relentless commitment to
              quality, efficiency, and customer satisfaction. His keen attention
              to detail and unwavering work ethic guarantee that every project
              meets the premium standards our clients expect.
            </motion.p>
            <motion.p
              className="mt-4 text-md opacity-90 text-justify"
              variants={textVariants}
            >
              A native of Spring Hill, Tennessee, Andrew brings a unique blend
              of Southern charm and grit to our team—qualities essential for the
              high demands of our industry. His leadership consistently drives
              our crew to success, delivering flawless results year after year.
            </motion.p>
            <motion.p
              className="mt-4 text-md opacity-90 text-justify"
              variants={textVariants}
            >
              Andrew is a graduate of Mount St. Joseph University and holds a
              master’s degree, demonstrating his dedication to continuous growth
              and excellence. During his time at MSJ, he was a standout football
              player and five-year starter, serving as captain of the 2024 team.
              Under his leadership, the team secured its third consecutive
              conference championship and made its third NCAA playoff appearance
              in five years.
            </motion.p>
            <motion.p
              className="mt-4 text-md opacity-90 text-justify"
              variants={textVariants}
            >
              Andrew leads with integrity, resilience, and a commitment to
              excellence, believing that:
            </motion.p>
            <motion.p
              className="mt-4 text-md opacity-90 text-justify"
              variants={textVariants}
            >
              “Hard work and faith pave the way to success.”
            </motion.p>
            <motion.p
              className="mt-4 text-md opacity-90 text-justify"
              variants={textVariants}
            >
              As he always says:
              <strong>
                “Be the doer in your life and watch as God blesses you
                abundantly.”
              </strong>
            </motion.p>

            <motion.div>
              {/* <motion.button
                className="inline-flex w-auto rounded-xl mt-6 px-6 py-3 text-black font-semibold uppercase items-center bg-[#00C6F9] hover:bg-white hover:text-[#00C6F9] transition"
                variants={textVariants}
              >
                <FaPhoneAlt className="mr-2" />
                <Link href="tel:+18134269257">(813) 426-9257</Link>
              </motion.button> */}
            </motion.div>
          </motion.div>
          {/* Right Side (Text Content) */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            className="p-6  flex items-center justify-center"
          >
            <motion.img
              src="/images/369.png"
              alt="Junk Removal Florida"
              className="w-full h-full object-cover border-4 rounded-lg"
              style={{ borderColor: "#00C6F9" }} // Blue border
              variants={imageVariants}
            />
          </motion.div>
        </div>
      </div>
      <Team/>
    </>
  );
};

export default Owner;
