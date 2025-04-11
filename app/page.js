"use client";
import React, { useState } from "react";
import Image from "next/image";
import log from "@/public/signin.svg";
import register from "@/public/signup.svg";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

const SlidingLoginSignup = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleSignUpMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  // Common button styles
  const buttonClasses =
    `w-full text-white bg-backgroundColor hover:bg-brightColor focus:ring-4 focus:outline-none 
    focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all 
    duration-200 transform hover:scale-[1.02] hover:shadow-md`;
  const buttonForGFT =
    `inline-flex w-full justify-center items-center rounded-lg border border-gray-300 bg-white 
    py-2.5 px-4 text-sm font-medium text-gray-500 hover:bg-gray-50 shadow-sm transition-all 
    duration-200 hover:shadow hover:border-gray-400`;

  return (
    <div
      className={`relative w-full bg-white min-h-screen overflow-hidden
           before:content-[''] before:absolute before:w-[1500px] before:h-[1500px] lg:before:h-[2000px] 
           lg:before:w-[2000px] lg:before:top-[-10%]  before:top-[initial] lg:before:right-[48%] 
           before:right-[initial]  max-lg:before:left-[30%] max-sm:bottom-[72%]   max-md:before:left-1/2 
            max-lg:before:bottom-[75%]  before:z-[6] before:rounded-[50%]    max-md:p-6     
            lg:before:-translate-y-1/2  max-lg:before:-translate-x-1/2  before:bg-backgroundColor 
            before:transition-all before:duration-[2s] lg:before:duration-[1.8s]  ${
        isSignUpMode
          ? `lg:before:translate-x-full before:-translate-x-1/2 
          before:translate-y-full lg:before:right-[52%] before:right-[initial]  sm:max-lg:before:bottom-[22%]
           max-sm:before:bottom-[20%]  max-md:before:left-1/2`
          : ""
      }`}
    >
      <div className="absolute w-full h-full top-0 left-0">
        <div
          className={` absolute top-[95%] lg:top-1/2 left-1/2 grid grid-cols-1 z-[5] -translate-x-1/2 
             -translate-y-full lg:-translate-y-1/2 lg:w-1/2 w-full  transition-[1s]  duration-[0.8s] 
             lg:duration-[0.7s] ease-[ease-in-out] "  ${
            isSignUpMode
              ? "lg:left-1/4   max-lg:top-[-10%]   max-lg:-translate-x-2/4   max-lg:translate-y-0"
              : "lg:left-3/4 "
          } `}
        >
          <div
            className={` flex items-center justify-center flex-col   transition-all duration-[0.2s] delay-[0.7s] 
              overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 px-20 max-lg:mt-60  z-20 max-md:px-6 
              max-md:py-0 ${
              isSignUpMode ? " opacity-0 z-10 " : " "
            }`}
          >
            <SignInForm
              buttonClasses={buttonClasses}
              buttonForGFT={buttonForGFT}
            />
          </div>

          <div
            className={`flex items-center justify-center flex-col px-20 transition-all  ease-in-out duration-[0.2s]
               delay-[0.7s] overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 py-0 z-10 max-md:px-6 
               max-md:py-0 opacity-0 ${
              isSignUpMode ? "opacity-100 z-20 " : "  "
            }`}
          >
            <SignUpForm
              buttonClasses={buttonClasses}
              buttonForGFT={buttonForGFT}
            />
          </div>
        </div>
      </div>

      <div className="absolute h-full w-full top-0 left-0 grid grid-cols-1   max-lg:grid-rows-[1fr_2fr_1fr]  
      lg:grid-cols-2">
        <div
          className={`flex flex-row justify-around lg:flex-col items-center  max-lg:col-start-1 max-lg:col-end-2  
            max-lg:px-[8%]   max-lg:py-10 lg:items-end  text-center z-[6]   max-lg:row-start-1 max-lg:row-end-2    
             pl-[12%] pr-[17%] pt-12 pb-8 ${
            isSignUpMode ? "pointer-events-none" : " pointer-events-auto"
          }`}
        >
          <div
            className={`text-white transition-transform duration-[0.9s]  lg:duration-[1.1s] ease-[ease-in-out] 
               delay-[0.8s] lg:delay-[0.4s]   max-lg:pr-[15%]  max-md:px-4  max-md:py-2 ${
              isSignUpMode
                ? "lg:translate-x-[-800px]   max-lg:translate-y-[-300px]"
                : ""
            }`}
          >
            <h3 className="font-semibold leading-none text-[1.2rem] lg:text-[1.5rem] text-gray-700">
              New here ?
            </h3>
            <p className="text-[0.7rem] lg:text-[0.95rem] px-0 py-2 lg:py-[0.7rem]">
            Sign up and discover our platform
            </p>
            <button
              className="bg-transparent w-[110px] h-[35px] text-gray-700 text-[0.7rem] lg:w-[130px] lg:h-[41px] 
              lg:text-[0.8rem]  font-semibold   border-2 border-white rounded-full transition-colors duration-300 
              hover:bg-white hover:text-gray-700"
              id="sign-up-btn"
              onClick={toggleSignUpMode}
            >
              Sign up
            </button>
          </div>

          <Image
            src={log}
            className={`  max-md:hidden max-lg:translate-y-[-40px] w-[200px] lg:w-full transition-transform 
              duration-[0.9s] lg:duration-[1.1s] ease-[ease-in-out] delay-[0.6s] lg:delay-[0.4s] ${
              isSignUpMode
                ? "lg:translate-x-[-800px]   max-lg:translate-y-[-300px]"
                : ""
            }`}
            alt="login"
          />
        </div>
        <div
          className={`flex flex-row   max-lg:row-start-3 max-lg:row-end-4 lg:flex-col items-center lg:items-end 
            justify-around text-center z-[6]   max-lg:col-start-1 max-lg:col-end-2  max-lg:px-[8%]   max-lg:py-10 
             pl-[17%] pr-[12%] pt-12 pb-8 ${
            isSignUpMode ? " pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div
            className={`text-white transition-transform duration-[0.9s] lg:duration-[1.1s] ease-in-out delay-[0.8s]
               lg:delay-[0.4s]   max-lg:pr-[15%] max-md:px-4  max-md:py-2 ${
              isSignUpMode
                ? ""
                : "lg:translate-x-[800px]   max-lg:translate-y-[300px]"
            }`}
          >
            <h3 className="font-semibold leading-none text-[1.2rem] lg:text-[1.5rem] text-gray-700">
              One of us ?
            </h3>
            <p className=" py-2 text-[0.7rem] lg:text-[0.95rem] px-0  lg:py-[0.7rem]">
              Sign in to your account to have hastle free experience
            </p>
            <button
              className=" text-gray-700 bg-transparent w-[110px] h-[35px]  text-[0.7rem] lg:w-[130px] 
              lg:h-[41px] lg:text-[0.8rem]  font-semibold   border-2 border-white rounded-full 
              transition-colors duration-300 hover:bg-white hover:text-gray-700"
              id="sign-in-btn"
              onClick={toggleSignUpMode}
            >
              Sign in
            </button>
          </div>

          <Image
            src={register}
            className={`  max-md:hidden w-[200px] lg:w-full transition-transform duration-[0.9s] 
              lg:duration-[1.1s] ease-[ease-in-out] delay-[0.6s] lg:delay-[0.4s] ${
              isSignUpMode
                ? ""
                : "lg:translate-x-[800px]  max-lg:translate-y-[300px]"
            }`}
            alt="register"
          />
        </div>
      </div>
    </div>
  );
};

export default SlidingLoginSignup;
