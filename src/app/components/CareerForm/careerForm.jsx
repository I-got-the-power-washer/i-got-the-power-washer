"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FiUser, FiMail, FiPhone, FiFileText, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Application Submitted Successfully!");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-2xl p-8 mt-10 border border-gray-100"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00C6F9] to-cyan-600 bg-clip-text text-transparent">
          Join Our Team
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          We're expanding in Cincinnati! Whether you prefer team collaboration or independent work,
          <br />
          <span className="font-semibold text-[#00C6F9]">Find your perfect role with us</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium flex items-center gap-1">
              <FiUser className="text-[#00C6F9]" />
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("firstName", { required: "First Name is required" })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
              placeholder="John"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                <FiAlertCircle className="inline" /> {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 font-medium flex items-center gap-1">
              <FiUser className="text-[#00C6F9]" />
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("lastName", { required: "Last Name is required" })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                <FiAlertCircle className="inline" /> {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium flex items-center gap-1">
              <FiMail className="text-[#00C6F9]" />
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                <FiAlertCircle className="inline" /> {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 font-medium flex items-center gap-1">
              <FiPhone className="text-[#00C6F9]" />
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              {...register("phone", { required: "Phone Number is required" })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                <FiAlertCircle className="inline" /> {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Message Section */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium flex items-center gap-1">
            <FiFileText className="text-[#00C6F9]" />
            Cover Letter
          </label>
          <textarea
            {...register("message")}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
            rows="4"
            placeholder="Tell us why you'd be a great fit..."
          ></textarea>
        </div>

        {/* Resume Upload */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium flex items-center gap-1">
            <FiFileText className="text-[#00C6F9]" />
            Upload Resume (PDF/DOC)
          </label>
          <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#00C6F9] transition-colors">
            <input
              type="file"
              {...register("resume")}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept=".pdf,.doc,.docx"
            />
            <p className="text-gray-500">
              Drag & drop files here or{" "}
              <span className="text-[#00C6F9] font-medium">browse</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">Max file size: 5MB</p>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-[#00C6F9] to-cyan-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
        >
          Submit Application
          <FiArrowRight className="w-5 h-5" />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CareerForm;