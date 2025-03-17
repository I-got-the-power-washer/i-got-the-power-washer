"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Professional from "../../../../public/animations/Man doing Power Washing.json";

const Pressure = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 md:p-12 bg-white">
        {/* JSON Animation */}
        <div className="flex justify-center mb-8">
          <Lottie
            animationData={Professional}
            loop
            autoplay
            className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]"
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Professional Pressure Washing in Cincinnati
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-700  mb-6">
          At I Got The Power Washer, we provide more than just standard pressure
          washing. Our advanced techniques and high-output equipment ensure a
          deep, thorough clean while protecting your surfaces for the long term.
        </p>

        {/* Section for Benefits */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Best Cincinnati Pressure Washing Company - Our Vision
        </h3>
        {/* <ul className="list-inside list-disc text-lg text-gray-700 mx-auto max-w-3xl mb-6">
          <li>
            <strong>Free Consultation:</strong> We’ll visit your home to assess your needs and recommend a customized cleaning plan.
          </li>
          <li>
            <strong>Tailored Schedule:</strong> Choose the frequency of services that works best for you—monthly, quarterly, or annually.
          </li>
          <li>
            <strong>Hassle-Free Maintenance:</strong> We’ll handle all the scheduling and reminders, so you don’t have to worry about a thing.
          </li>
          <li>
            <strong>Exclusive Savings:</strong> On average, enjoy around 35% off regular pricing when you sign up for an annual contract.
          </li>
        </ul> */}
        <p className="text-lg text-gray-700  mb-6">
          I Got Power Washer is the name of trust and peerless services when it
          comes to the pressure washing business in Cincinnati. We are a team of
          highly trained professionals with years of professional experience. We
          aim to create a healthy and clean community, and our service providers
          love cleaning, so every wash is washed with love and passion.
        </p>

        {/* Section for Different Services with Image on Right */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="sm:w-1/2 text-lg text-gray-700">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Remote Jobs Available
              </h3>
              <p className="text-lg text-gray-700  mb-6">
                No water source? No problem. We can haul our own water for jobs
                in remote areas where access is limited. Our high-capacity water
                transport system allows us to complete thorough cleanings
                anywhere. Additional charges may apply for this service.
              </p>
            </div>
            <div className="sm:w-1/2">
              <img
                src="/images/305.png"
                alt="Pressure Washing"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="sm:w-1/2 text-lg text-gray-700">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Why Choose Pressure Washing Cincinnati
              </h3>
              <ul className="list-inside list-disc">
                <li>
                  <strong>High-Performance Equipment –</strong> We use
                  industry-leading pressure washers with up to 23 gallons per
                  minute (GPM) output, compared to the standard 4 GPM. This
                  allows us to clean efficiently using water volume rather than
                  excessive pressure, reducing the risk of surface damage. Our
                  advanced equipment enables us to flush out deeply embedded
                  grime and organic growth without causing harm to delicate
                  surfaces.
                </li>
                <li>
                  <strong>Post-Treatment Protection –</strong> Our specialized
                  post-treatment ensures that your surfaces remain cleaner for a
                  significantly longer period. Pressure washing alone only
                  removes the visible dirt, much like wiping a kitchen cutting
                  board without soap. Our post-treatment acts like a
                  disinfecting wash, eliminating algae, mold, and mildew spores
                  at the root. Without it, streaking and regrowth occur
                  unevenly, as standard pressure washing doesn’t clean
                  uniformly. This essential step prevents premature buildup,
                  keeping your property looking fresh for an extended time.
                </li>
              </ul>
            </div>
            <div className="sm:w-1/2">
              <img
                src="/images/299-1024x683-1.png"
                alt="House Washing"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold  text-gray-800 mb-6">
          What We Offer
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-700  mb-6">
          We are committed to delivering perfection when it comes to our
          pressure wash service in Cincinnati. We take care of your comfort and
          pristine. We strive to serve our customers better with every wash.
          Furthermore, we have years of professional experience and some
          advanced modern machinery in Cincinnati. We offer a wide range of
          pressure washing services: from small residential jobs to large
          commercial ones, we can handle it all! We are a company that is
          licensed and insured. We offer total customer satisfaction, affordable
          prices, and warrantied services. Not only that, but we also deliver
        </p>
        <ul className="list-inside list-disc">
          <li>
            <strong>Roof cleaning</strong>
          </li>
          <li>
            <strong>Fence cleaning</strong>
          </li>
          <li>
            <strong>House clean</strong>
          </li>
          <li>
            <strong>Solar panel cleaning</strong>
          </li>
          <li>
            <strong>Stain removals</strong>
          </li>
          <li>
            <strong>Sealing services</strong>
          </li>
          <li>
            <strong>Fleet cleaning</strong>
          </li>
        </ul>
        <h2 className="text-3xl font-bold  text-gray-800 mb-6 mt-2">
          Technical Machinery Use for Pressure Washing
        </h2>
        {/* Paragraph */}
        <p className="text-lg text-gray-700  mb-6">
          Pressure washing is a technique that uses high-pressure water to
          remove dirt, grime, mold, algae, and other contaminants from various
          surfaces. Pressure washing can improve the appearance and value of
          your home or business, as well as protect it from damage and
          deterioration. If you are looking for a reliable and professional
          pressure washing Cincinnati, Ohio then you are the place to contact
          us.
        </p>
        <p className="text-lg text-gray-700  mb-6">
          We also provide pressure wash services in the following areas:
        </p>
        <ul className="list-inside list-disc">
          <li>Pressure Wash in Hamilton County</li>
          <li>Pressure Wash in Clermont County</li>
          <li>Pressure Wash in Butler County</li>
          <li>Pressure Wash in Warren County</li>
          <li>Pressure Wash in Montgomery County</li>
        </ul>
        <p className="text-lg text-gray-700  mb-6 mt-2">
          Our service offerings rely on a range of tangible resources, including
          technologically advanced equipment. We employ hot and cold washers
          based on the surface condition of the area being cleaned. For surfaces
          that exhibit an accumulation of grease, grime, or oil, we rely on hot
          water washers, while cold water washers are preferred for the removal
          of dirt and mud. Our high-pressure nozzles, X-jets, and sewer jets are
          highly effective in ensuring thorough cleaning and are backed by
          surface cleaners that are optimized for cleaning parking lots,
          warehouses, and trailer floors.
        </p>
        <p className="text-lg text-gray-700  mb-6">
          We start by using a water recovery system to get rid of the sludge and
          give you a clean wash. We also use the dual lance, a 36-inch lance
          that works great with hot water and can handle up to 220 degrees
          Celsius. For quality, we use telescoping wands that offer up to 4000
          PSI of force. I Got The Power Washer uses top-notch soap, detergent,
          and cleaning supplies that make your floor shine. Plus, we have a
          fleet of specialized trucks, vans, and washer trailers that bring our
          resources and help us finish the job fast.
        </p>
        <p className="text-lg text-gray-700  mb-6">
          If you are looking for pressure wash services Cincinnati, you have
          come to the right place. We are Cincinnati’s premier pressure washing
          company, and we can handle any home pressure washing Cincinnati OH
          project. Whether you need to pressure wash your siding, roof, deck,
          patio, driveway, or sidewalk, we are the experts you can trust.
          Contact us today and get a free quote for your pressure wash
          Cincinnati needs. We are the best Cincinnati Ohio pressure washing
          service you can find.
        </p>

        {/* Section for Different Services with Image on Right */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="sm:w-1/2 text-lg text-gray-700">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Take a look at our magic
              </h3>
              <p className="text-lg text-gray-500  mt-4">
                “My walkway went from black and green to white—I couldn’t
                believe the difference! I’ll admit, I was skeptical at first,
                but they completely proved me wrong. The results speak for
                themselves!”
              </p>
            </div>
            <div className="sm:w-1/2">
              <img
                src="/images/effff.jpg"
                alt="Pressure Washing"
                className="lg:ml-16 w-auto h-96 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold  text-gray-800 mb-6 mt-2">Effects of our power washing professionalism.</h2>
      <p className="text-lg text-gray-700  mb-6">
        “Unbelievable! Andrew came out and had my filthy house looking brand new
        in just a couple of hours. My brick went from black to a glistening red
        again—thank you so much! I’m beyond impressed!”
      </p>
      </div>
    </div>
  );
};

export default Pressure;
