"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast.success("Form submitted successfully!");
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      company: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact-form"
    className="bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] p-4 md:p-6">
      <div className=" mx-auto px-4 md:px-6 lg:px-8 mb-10 ">
        
        <form 
        action='https://formspree.io/f/mayrrgno'
        method="POST"
        onSubmit={handleSubmit} 
        className="space-y-6">
          
          {/* Hello with smiley */}
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-8xl font-bold text-black">Hello</h1>
            <div className="w-12 h-12 md:w-16 md:h-16 border-3 border-black rounded-full flex items-center justify-center bg-white">
              <span className="text-lg md:text-3xl">😊</span>
            </div>
          </div>

          {/* My name is */}
          <div className="flex flex-wrap items-center gap-3 text-3xl md:text-4xl font-bold text-black">
            {/* <span>My name is</span> */}
            <h1 className="text-2xl md:text-8xl font-bold text-black">
              My name is
            </h1>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="mt-7 bg-transparent border-b-3 border-black outline-none placeholder-gray-600 text-2xl md:text-3xl font-bold min-w-[250px] flex-1"
              required
            />
          </div>

          {/* I'm from */}
          <div className="flex flex-wrap items-center gap-3 text-3xl md:text-4xl font-bold text-black">
            {/* <span>I'm from</span> */}
            <h1 className="text-2xl md:text-8xl font-bold text-black">
              {`I'm from`}
            </h1>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Enter your company"
              className="mt-7 bg-transparent border-b-3 border-black outline-none placeholder-gray-600 text-2xl md:text-3xl font-bold min-w-[280px] flex-1"
              required
            />
          </div>

          {/* here is my email */}
          <div className="flex flex-wrap items-center gap-3 text-3xl md:text-4xl font-bold text-black">
            {/* <span>here is my email</span> */}
            <h1 className="text-2xl md:text-8xl font-bold text-black">
              here is my email
            </h1>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="mt-7 bg-transparent border-b-3 border-black outline-none placeholder-gray-600 text-2xl md:text-3xl font-bold min-w-[260px] flex-1"
              required
            />
          </div>

          {/* and message */}
          <div className="flex flex-wrap items-start gap-3 text-3xl md:text-4xl font-bold text-black">
            {/* <span>and message</span> */}
            <h1 className="text-2xl md:text-8xl font-bold text-black">
              and message
            </h1>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              rows={2}
              className=" mt-4 border-b-3 bg-transparent border-black outline-none placeholder-gray-600 text-2xl md:text-3xl font-bold min-w-[260px] flex-1"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            {/* <button
              type="submit"
              className=" hover:cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-lg px-8 py-3 rounded-full border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Submit
              <span className="text-xl">
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8158 11.6022L5.73245 3.6885C4.46578 3.02225 2.99912 4.176 3.39912 5.52475L5.46578 12.5772C5.54912 12.8697 5.54912 13.1622 5.46578 13.4547L3.39912 20.5072C2.99912 21.856 4.46578 23.0097 5.73245 22.3435L20.8158 14.4297C21.0731 14.2927 21.2878 14.0906 21.4374 13.8447C21.587 13.5988 21.666 13.3181 21.666 13.0322C21.666 12.7463 21.587 12.4657 21.4374 12.2198C21.2878 11.9739 21.0731 11.7718 20.8158 11.6347V11.6022Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button> */}

            <button
              className="hover:cursor-pointer relative px-10 py-4 rounded-full bg-yellow-400 text-black font-medium text-xl
    shadow-[0px_8px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_6px_0px_rgba(0,0,0,1)]"
            >
              Submit ➤
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

