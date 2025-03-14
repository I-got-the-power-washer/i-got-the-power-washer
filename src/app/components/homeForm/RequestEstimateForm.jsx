"use client";
import { useState } from "react";

const RequestEstimateForm = () => {
  const [customerType, setCustomerType] = useState("residential");

  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-12 ">
      <div className="max-w-3xl w-full p-8 bg-white shadow-lg rounded-lg border-4 border-[#00C6F9]">
        {/* Heading */}
        <h2 className="mb-6 text-[2.5rem] font-bold text-[#00C6F9] text-center uppercase tracking-[2px] md:text-[2rem]">
          Request Your Free Estimate
        </h2>

        {/* Customer Type Selection */}
        <div className="mb-6">
          <label className="block font-semibold text-gray-700 mb-2">
            Customer Type *
          </label>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="customerType"
                value="residential"
                checked={customerType === "residential"}
                onChange={() => setCustomerType("residential")}
                className="hidden"
              />
              <span
                className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${
                  customerType === "residential"
                    ? "bg-[#00C6F9] border-[#00C6F9]"
                    : "border-gray-400"
                }`}
              >
                {customerType === "residential" && (
                  <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                )}
              </span>
              <span className="text-gray-800">Residential</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="customerType"
                value="commercial"
                checked={customerType === "commercial"}
                onChange={() => setCustomerType("commercial")}
                className="hidden"
              />
              <span
                className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${
                  customerType === "commercial"
                    ? "bg-[#00C6F9] border-[#00C6F9]"
                    : "border-gray-400"
                }`}
              >
                {customerType === "commercial" && (
                  <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                )}
              </span>
              <span className="text-gray-800">Commercial</span>
            </label>
          </div>
        </div>

        {/* Common Fields */}
        <div className="space-y-4">
          <InputField label="Name *" type="text" required />
          <InputField label="Phone *" type="text" required />
          <InputField label="Email *" type="email" required />
        </div>

        {/* Residential Form Fields */}
        {customerType === "residential" && (
          <div className="space-y-4 mt-4">
            <InputField label="Address *" type="text" required />
            <InputField label="Suite/Unit" type="text" />
            <TextareaField label="Message *" required />
          </div>
        )}

        {/* Commercial Form Fields */}
        {customerType === "commercial" && (
          <div className="space-y-4 mt-4">
            <InputField label="Business Name *" type="text" required />
            <InputField label="Company Address *" type="text" required />
            <SelectField
              label="Industry Type *"
              options={["Select Industry", "Construction", "Technology", "Finance", "Other"]}
              required
            />
          </div>
        )}

        {/* Common Fields (Both Types) */}
        <div className="space-y-4 mt-4">
          <SelectField
            label="Preferred Time to Contact"
            options={["Any time", "Morning", "Afternoon", "Evening"]}
          />
          <InputField label="How did you hear about us? *" type="text" required />
        </div>

        {/* Submit Button */}
        <button className="mt-6 w-full bg-[#00C6F9] text-white font-bold py-3 rounded-lg text-lg hover:bg-[#009ec9] transition">
          Send Request
        </button>
      </div>
    </section>
  );
};

export default RequestEstimateForm;

/* ✅ Reusable Input, Textarea, and Select Components */
const InputField = ({ label, type, required }) => (
  <div>
    <label className="block font-medium text-gray-700">{label}</label>
    <input
      type={type}
      className="w-full border-2 border-gray-300 p-3 rounded-md focus:border-[#00C6F9] focus:outline-none transition"
      required={required}
    />
  </div>
);

const TextareaField = ({ label, required }) => (
  <div>
    <label className="block font-medium text-gray-700">{label}</label>
    <textarea
      className="w-full border-2 border-gray-300 p-3 rounded-md focus:border-[#00C6F9] focus:outline-none transition h-24"
      required={required}
    ></textarea>
  </div>
);

const SelectField = ({ label, options, required }) => (
  <div>
    <label className="block font-medium text-gray-700">{label}</label>
    <select
      className="w-full border-2 border-gray-300 p-3 rounded-md focus:border-[#00C6F9] focus:outline-none transition"
      required={required}
    >
      {options.map((option, index) => (
        <option key={index} value={option.toLowerCase()}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
