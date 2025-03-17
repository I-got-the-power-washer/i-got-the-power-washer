"use client";

import React from "react";
import { useForm } from "react-hook-form";

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
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6 border">
      <h2 className="text-lg font-bold text-center text-[#00C6F9]">
        Looking for a job? We are hiring!
      </h2>
      <p className="text-center text-gray-700">
        If you are in the area of Cincinnati, we are interested. Whether you like to be on a team or want to run solo, we can fit you in at any time of the week.
        <br /> <strong>Apply here!</strong>
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">First Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              {...register("firstName", { required: "First Name is required" })}
              className="w-full border p-2 rounded-md"
              placeholder="First Name"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Last Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              {...register("lastName", { required: "Last Name is required" })}
              className="w-full border p-2 rounded-md"
              placeholder="Last Name"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Email & Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-gray-700 font-medium">Your Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border p-2 rounded-md"
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Your Phone Number <span className="text-red-500">*</span></label>
            <input
              type="tel"
              {...register("phone", { required: "Phone Number is required" })}
              className="w-full border p-2 rounded-md"
              placeholder="Your Phone Number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="mt-4">
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            {...register("message")}
            className="w-full border p-2 rounded-md"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>

        {/* Resume Upload */}
        <div className="mt-4">
          <label className="block text-gray-700 font-medium">Your Resume</label>
          <input
            type="file"
            {...register("resume")}
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#00C6F9] text-white p-3 rounded-lg mt-4 hover:bg-blue-700 transition"
        >
          Apply Now!
        </button>
      </form>
    </div>
  );
};

export default CareerForm;
