"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiBriefcase, FiUser, FiPhone, FiMail, FiMapPin, FiMessageSquare, FiClock } from "react-icons/fi";

const RequestEstimateForm = () => {
  const [customerType, setCustomerType] = useState("residential");

  return (
    <section className="min-h-screen flex items-center justify-center py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full p-8 bg-white rounded-2xl shadow-2xl border border-gray-100"
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00C6F9] to-cyan-600 bg-clip-text text-transparent">
            Request Your Free Estimate
          </h2>
          <p className="text-gray-600 mt-3">Get started with our professional services in 3 easy steps</p>
        </div>

        {/* Customer Type Selection */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-700 mb-4">Customer Type *</label>
          <div className="grid grid-cols-2 gap-4">
            <CustomerTypeButton
              value="residential"
              current={customerType}
              onChange={setCustomerType}
              icon={<FiHome />}
              label="Residential"
            />
            <CustomerTypeButton
              value="commercial"
              current={customerType}
              onChange={setCustomerType}
              icon={<FiBriefcase />}
              label="Commercial"
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField 
              label="Full Name *" 
              icon={<FiUser />}
              type="text" 
              placeholder="John Doe"
            />
            <InputField 
              label="Phone Number *" 
              icon={<FiPhone />}
              type="tel" 
              placeholder="(555) 123-4567"
            />
            <InputField 
              label="Email Address *" 
              icon={<FiMail />}
              type="email" 
              placeholder="john@example.com"
            />
          </div>

          <AnimatePresence mode="wait">
            {customerType === "residential" ? (
              <motion.div
                key="residential"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <InputField 
                  label="Address *" 
                  icon={<FiMapPin />}
                  type="text" 
                  placeholder="123 Main St"
                />
                <InputField 
                  label="Suite/Unit" 
                  type="text" 
                  placeholder="Apt 4B"
                />
                <TextareaField 
                  label="Message *" 
                  icon={<FiMessageSquare />}
                  placeholder="Tell us about your project..."
                />
              </motion.div>
            ) : (
              <motion.div
                key="commercial"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <InputField 
                  label="Business Name *" 
                  type="text" 
                  placeholder="Company Inc."
                />
                <InputField 
                  label="Company Address *" 
                  icon={<FiMapPin />}
                  type="text" 
                  placeholder="456 Business Ave"
                />
                <SelectField 
                  label="Industry Type *" 
                  icon={<FiBriefcase />}
                  options={["Technology", "Construction", "Retail", "Healthcare", "Other"]}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField 
              label="Preferred Contact Time" 
              icon={<FiClock />}
              options={["Any Time", "Morning (8am-12pm)", "Afternoon (12pm-5pm)", "Evening (5pm-8pm)"]}
            />
            <InputField 
              label="How did you hear about us?" 
              type="text" 
              placeholder="Referral, Social Media, etc."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#00C6F9] to-cyan-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Send Free Estimate Request
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

// Custom Components
const CustomerTypeButton = ({ value, current, onChange, icon, label }) => (
  <button
    type="button"
    onClick={() => onChange(value)}
    className={`p-4 rounded-xl border-2 transition-all ${
      current === value
        ? "border-[#00C6F9] bg-[#00C6F9]/10"
        : "border-gray-200 hover:border-gray-300"
    }`}
  >
    <div className="flex items-center gap-3">
      <span className={`text-xl ${current === value ? "text-[#00C6F9]" : "text-gray-500"}`}>
        {icon}
      </span>
      <span className={`font-medium ${current === value ? "text-[#00C6F9]" : "text-gray-700"}`}>
        {label}
      </span>
    </div>
  </button>
);

const InputField = ({ label, icon, type, placeholder, required }) => (
  <div className="space-y-1">
    <label className="flex items-center gap-2 text-gray-700 font-medium">
      {icon && <span className="text-[#00C6F9]">{icon}</span>}
      {label}
    </label>
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
    />
  </div>
);

const TextareaField = ({ label, icon, placeholder, required }) => (
  <div className="space-y-1">
    <label className="flex items-center gap-2 text-gray-700 font-medium">
      {icon && <span className="text-[#00C6F9]">{icon}</span>}
      {label}
    </label>
    <textarea
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all h-32"
    />
  </div>
);

const SelectField = ({ label, icon, options, required }) => (
  <div className="space-y-1">
    <label className="flex items-center gap-2 text-gray-700 font-medium">
      {icon && <span className="text-[#00C6F9]">{icon}</span>}
      {label}
    </label>
    <select
      required={required}
      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all appearance-none"
    >
      {options.map((option, index) => (
        <option key={index} value={option.toLowerCase()}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default RequestEstimateForm;