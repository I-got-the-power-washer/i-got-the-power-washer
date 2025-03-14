// components/FAQ.jsx
"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Bubble from "../../../../public/animations/Water Splash.json"; // Adjust path as needed
import Lottie from "lottie-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Is pressure washing safe for all surfaces?",
      answer:
        "Pressure washing is a safe cleaning method for most surfaces, provided the pressure and technique are adjusted appropriately for each surface type. Delicate surfaces, including wood or painted areas, require lower pressure settings to avert potential damage. Conversely, more rigid surfaces like concrete or brick can withstand higher pressure levels without adverse effects. Relying on the expertise of a professional pressure washing service like IGotThePowerWasher guarantees that the optimal pressure and technique are employed for every surface, ensuring safety and effectiveness.",
    },
    {
      question: "Will pressure washing damage my plants or landscaping?",
      answer:
        "When done correctly, pressure washing should not damage your plants or landscaping. However, it’s advisable to cover delicate plants or move them away from the cleaned areas as a precaution. Water runoff from pressure washing can sometimes contain cleaning agents or debris, which may harm plants. Ensuring the protection of your landscaping is of utmost importance to a reputable pressure washing service. IGotThePowerWasher understands the significance of taking necessary precautions to minimize any potential impact, demonstrating their commitment to maintaining the integrity and aesthetics of your outdoor space.",
    },
    {
      question:
        "How frequently should I arrange for pressure washing services?",
      answer:
        "The optimal frequency for pressure washing services depends on various factors, including specific surfaces, prevailing weather conditions, and the level of dirt or stains. While a general recommendation is to schedule pressure washing annually to uphold the appearance and prevent long-term damage to your outdoor surfaces, it is essential to consider high-traffic areas or surfaces exposed to harsh elements, which may necessitate more frequent cleanings.",
    },
    {
      question:
        "Will pressure washing effectively eliminate oil stains from my driveway?",
      answer:
        "Absolutely! Pressure washing is a highly effective method for removing oil stains from driveways. However, it is essential to note that stain removal’s success depends on the stains’ severity. In some cases, additional treatments or specialized cleaning agents may be required to achieve the best results. To ensure the most appropriate approach for effective stain removal, it is recommended to consult with a professional pressure washing service. IGotThePowerWasher expertise will enable us to assess the specific stain and determine the most suitable action.",
    },
    {
      question:
        "Does pressure washing effectively eliminate mold and mildew from surfaces?",
      answer:
        "Undoubtedly! Pressure washing is a highly efficient method for eradicating mold and mildew from surfaces. When combined with appropriate cleaning agents, the powerful force of high-pressure water works effectively to eliminate mold and mildew and prevent their regrowth. When opting for pressure washing, hiring a professional service that has a deep understanding of the proper techniques and employs environmentally friendly cleaning agents to ensure optimal results is advisable. So, IGotThePowerWasher has got you covered for this.",
    },
    {
      question:
        "Should I hire a professional, or can I pressure wash my own house?",
      answer:
        "While it is possible to undertake pressure washing on your own, it is highly recommended to enlist the services of a professional. Professional pressure washing services bring valuable expertise, knowledge, and specialized equipment to the table, ensuring the safe and effective cleaning of your home’s exterior surfaces. Additionally, professionals can identify and address any underlying issues that may require attention, such as damaged or loose siding. By relying on IGotThePowerWasher professionals, you can have peace of mind knowing that your property will be treated with care, delivering superior results without risking any potential damage.",
    },
    {
      question: "How long does a typical pressure washing service take?",
      answer:
        "The duration of a pressure washing service depends on various factors, including the size of the area to be cleaned, the level of dirt or stains, and the accessibility of the surfaces. Generally, a pressure washing service can take anywhere from a few hours to a full day for residential projects. Larger-scale or commercial projects may require more time for completion. To get a precise estimate of the expected duration for your specific needs, it is advisable to consult with a pressure washing service like IGotThePowerWasher beforehand.",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 relative">
         <div className="absolute inset-0 z-0 opacity-50 overflow-hidden">
        <Lottie
          animationData={Bubble}
          loop={true}
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
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-[#00C6F9] mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-300 border-b border-gray-800 ${
                activeIndex === index ? "border-b-0" : ""
              }`}
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span className="text-lg font-medium text-[#00C6F9] hover:text-[#00C6F9] transition-colors">
                  {item.question}
                </span>
                {activeIndex === index ? (
                  <FaMinus className="h-6 w-6 text-[#00C6F9]" />
                ) : (
                  <FaPlus className="h-6 w-6 text-[#00C6F9]" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-96 opacity-100 pb-4 px-4 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-200">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
