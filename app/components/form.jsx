"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles


export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => { 
    try {
      console.log("Form Data:", data);
  
      await emailjs.send(
        "service_82b257f",
        "template_mzxssbb",
        {
          to_name: "Ali Muhammad",
          from_name: data.name,
          message: data.message,
          from_email: data.email,
          from_phone: data.phone,
        },
        "z4sKljaNDvX4Bjnj-"
      );
  
      toast.success("Email sent successfully!");
  
      await emailjs.send(
        "service_82b257f",
        "template_9lfv97g",
        {
          from_name: "Embrace team",
          to_name: data.name,
          user_email: data.email,
          message: data.message,
        },
        "z4sKljaNDvX4Bjnj-"
      );
  
      toast.success("Confirmation email sent successfully!");
  
      reset(); 
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Error occurred while sending email.");
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[20rem] sm:w-[30rem] p-4 border rounded-lg shadow-lg">
      <ToastContainer/>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "Name must be at least 3 characters long" },
            pattern: { value: /^[A-Za-z\s]+$/, message: "Name must not contain numbers or special characters" },
          })}
          className="w-full p-2 border rounded"
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
          })}
          className="w-full p-2 border rounded"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
        <input
          type="tel"
          {...register("phone", {
            required: "Phone number is required",
            pattern: { value: /^[0-9]{11}$/, message: "Invalid phone number (11 digits required)" },
          })}
          className="w-full p-2 border rounded"
        />
        {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Message</label>
        <textarea
          rows={5}
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Message must be at least 10 characters" },
          })}
          className="w-full p-2 border rounded"
        ></textarea>
        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
      </div>

      <button disabled={isSubmitting} type="submit" className={`w-full p-2 rounded hover:bg-blue-600 ${isSubmitting?"opacity-80 cursor-not-allowed":" bg-blue-500 text-white"}`}>
      {isSubmitting?"Submitting...":"Submit"}
      </button>
    </form>
  );
}
