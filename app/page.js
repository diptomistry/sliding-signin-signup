'use client';
import React,{useState} from "react";
import Image from "next/image";
import log from "@/public/signin.svg";
import register from "@/public/signup.svg";

const SlidingLoginSignup = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);


  const toggleSignUpMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div>
      <div
        className={`relative w-full bg-white min-h-[100vh] lg:min-h-screen overflow-hidden   before:content-[''] before:absolute before:w-[1500px] before:h-[1500px] lg:before:h-[2000px] lg:before:w-[2000px] lg:before:top-[-10%]  before:top-[initial] lg:before:right-[48%] before:right-[initial]  max-lg:before:left-[30%] max-sm:bottom-[72%]   max-md:before:left-1/2  max-lg:before:bottom-[75%]  before:z-[6] before:rounded-[50%]    max-md:p-6     lg:before:-translate-y-1/2  max-lg:before:-translate-x-1/2  before:bg-backgroundColor before:transition-all before:duration-[2s] lg:before:duration-[1.8s]  ${
          isSignUpMode
            ? "lg:before:translate-x-full lg:before:-translate-y-1/2 before:-translate-x-1/2 before:translate-y-full lg:before:right-[52%] before:right-[initial]  sm:max-lg:before:bottom-[22%] max-sm:before:bottom-[20%]  max-md:before:left-1/2"
            : ""
        }`}
      >
        <div className="absolute w-full h-full top-0 left-0">
          <div
            className={` absolute top-[95%] lg:top-1/2 left-1/2 grid grid-cols-[1fr] z-[5] -translate-x-1/2  -translate-y-full lg:-translate-y-1/2 lg:w-1/2 w-full  transition-[1s]  duration-[0.8s] lg:duration-[0.7s] ease-[ease-in-out] "  ${
              isSignUpMode
                ? "lg:left-1/4   max-lg:top-[-10%]   max-lg:-translate-x-2/4   max-lg:translate-y-0"
                : "lg:left-3/4 "
            } `}
          >
            <div
              className={` flex items-center justify-center flex-col   transition-all duration-[0.2s] delay-[0.7s] overflow-hidden col-[1_/_2] row-[1_/_2] px-20 max-lg:mt-60  z-20 max-md:px-6 max-md:py-0 ${
                isSignUpMode ? " opacity-0 z-10 " : " "
              }`}
            >
        
      <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 border border-gray-100">
        <div className="p-6 space-y-6 md:space-y-7 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-backgroundColor md:text-2xl text-center">
            Welcome Back
            <p className="text-sm font-normal text-gray-500 mt-1">Sign in to your account</p>
          </h1>
          
          <form className="space-y-5 md:space-y-6" action="#">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-[#d5f2ec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
                placeholder="Email address"
                required
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-[#d5f2ec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 rounded bg-gray-50 "
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500  cursor-pointer">
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-brightColor hover:underline transition-colors"
              >
                Forgot password?
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full text-white bg-backgroundColor hover:bg-brightColor focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md"
            >
              Sign in
            </button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {/* Google */}
            <button type="button" className="inline-flex w-full justify-center items-center rounded-lg border border-gray-300 bg-white py-2.5 px-4 text-sm font-medium text-gray-500 hover:bg-gray-50 shadow-sm transition-all duration-200 hover:shadow hover:border-gray-400">
              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
            </button>
            
            {/* Facebook */}
            <button type="button" className="inline-flex w-full justify-center items-center rounded-lg border border-gray-300 bg-white py-2.5 px-4 text-sm font-medium text-gray-500 hover:bg-gray-50 shadow-sm transition-all duration-200 hover:shadow hover:border-gray-400">
              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Twitter/X */}
            <button type="button" className="inline-flex w-full justify-center items-center rounded-lg border border-gray-300 bg-white py-2.5 px-4 text-sm font-medium text-gray-500 hover:bg-gray-50 shadow-sm transition-all duration-200 hover:shadow hover:border-gray-400">
              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
              </svg>
            </button>
          </div>
          
          <p className="text-sm text-center text-gray-600 mt-4 border-t border-gray-100 pt-4">
            If you don&apos;t have an account, Do Sign Up
          </p>
        </div>
      </div>

            </div>

            <div
              className={` flex items-center justify-center flex-col px-20 transition-all  ease-in-out duration-[0.2s] delay-[0.7s] overflow-hidden col-[1_/_2] row-[1_/_2] py-0 z-10 max-md:px-6 max-md:py-0 opacity-0 ${
                isSignUpMode ? "opacity-100 z-20 " : "  "
              }`}
            >
           <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 border border-gray-100">
        <div className="p-6 space-y-6 md:space-y-7 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-backgroundColor md:text-2xl text-center">
            Create Account
            <p className="text-sm font-normal text-gray-500 mt-1">Sign up to get started</p>
          </h1>
          
          <form className="space-y-5 md:space-y-6" action="#">
       <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 md:gap-6">
       <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="bg-[#d5f2ec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
                placeholder="Full name"
                required
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-[#d5f2ec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
                placeholder="Email address"
                required
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-[#d5f2ec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
                placeholder="Password"
                required
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="bg-[#d5f2ec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
                placeholder="Confirm password"
                required
              />
            </div>

       </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4  rounded bg-gray-50 "
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-500 hover:text-gray-700 cursor-pointer">
                  I agree to the <a href="#" className="text-brightColor hover:text-brightColor font-medium">Terms of Service</a> and <a href="#" className="text-brightColor hover:text-brightColor font-medium">Privacy Policy</a>
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full text-white bg-backgroundColor hover:bg-brightColor focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md"
            >
              Create Account
            </button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {/* Google */}
            <button type="button" className="inline-flex w-full justify-center items-center rounded-lg border border-gray-300 bg-white py-2.5 px-4 text-sm font-medium text-gray-500 hover:bg-gray-50 shadow-sm transition-all duration-200 hover:shadow hover:border-gray-400">
              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
            </button>
            
            {/* Facebook */}
            <button type="button" className="inline-flex w-full justify-center items-center rounded-lg border border-gray-300 bg-white py-2.5 px-4 text-sm font-medium text-gray-500 hover:bg-gray-50 shadow-sm transition-all duration-200 hover:shadow hover:border-gray-400">
              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Twitter/X */}
            <button type="button" className="inline-flex w-full justify-center items-center rounded-lg border border-gray-300 bg-white py-2.5 px-4 text-sm font-medium text-gray-500 hover:bg-gray-50 shadow-sm transition-all duration-200 hover:shadow hover:border-gray-400">
              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
              </svg>
            </button>
          </div>
          
          <p className="text-sm text-center text-gray-600 mt-4 border-t border-gray-100 pt-4">
            Already have an account? Sign in
          </p>
        </div>
      </div>
            </div>
          </div>
        </div>

        <div className="absolute h-full w-full top-0 left-0 grid grid-cols-[1fr]   max-lg:grid-rows-[1fr_2fr_1fr]  lg:grid-cols-[repeat(2,1fr)]">
          <div
            className={`flex flex-row justify-around lg:flex-col items-center  max-lg:col-[1_/_2]  max-lg:px-[8%]   max-lg:py-10 lg:items-end  text-center z-[6]   max-lg:row-[1_/_2]      pl-[12%] pr-[17%] pt-12 pb-8 ${
              isSignUpMode ? "pointer-events-none" : " pointer-events-auto"
            }`}
          >
            <div
              className={`text-white transition-transform duration-[0.9s]  lg:duration-[1.1s] ease-[ease-in-out]  delay-[0.8s] lg:delay-[0.4s]   max-lg:pr-[15%]  max-md:px-4  max-md:py-2 ${
                isSignUpMode
                  ? "lg:translate-x-[-800px]   max-lg:translate-y-[-300px]"
                  : ""
              }`}
            >
              <h3 className="font-semibold leading-none text-[1.2rem] lg:text-[1.5rem] text-gray-700">
                New here ?
              </h3>
              <p class="  text-[0.7rem] lg:text-[0.95rem] px-0 py-2 lg:py-[0.7rem]">
                Sign up and discover the digital platform of Dhaka University
                Medical Center
              </p>
              <button
                className="bg-transparent w-[110px] h-[35px] text-gray-700 text-[0.7rem] lg:w-[130px] lg:h-[41px] lg:text-[0.8rem]  font-semibold   border-2 border-white rounded-full transition-colors duration-300 hover:bg-white hover:text-gray-700"
                id="sign-up-btn"
                onClick={toggleSignUpMode}
              >
                Sign up
              </button>
            </div>
           
            <Image
              src={log}
              className={`  max-md:hidden max-lg:translate-y-[-40px] w-[200px] lg:w-full transition-transform duration-[0.9s] lg:duration-[1.1s] ease-[ease-in-out] delay-[0.6s] lg:delay-[0.4s] ${
                isSignUpMode
                  ? "lg:translate-x-[-800px]   max-lg:translate-y-[-300px]"
                  : ""
              }`}
              alt="login"
            />
          </div>
          <div
            className={`flex flex-row   max-lg:row-[3_/_4] lg:flex-col items-center lg:items-end justify-around text-center z-[6]   max-lg:col-[1_/_2]   max-lg:px-[8%]   max-lg:py-10  pl-[17%] pr-[12%] pt-12 pb-8 ${
              isSignUpMode ? " pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <div
              className={`text-white transition-transform duration-[0.9s] lg:duration-[1.1s] ease-in-out delay-[0.8s] lg:delay-[0.4s]   max-lg:pr-[15%] max-md:px-4  max-md:py-2 ${
                isSignUpMode
                  ? ""
                  : "lg:translate-x-[800px]   max-lg:translate-y-[300px]"
              }`}
            >
              <h3 className="font-semibold leading-none text-[1.2rem] lg:text-[1.5rem] text-gray-700">
                One of us ?
              </h3>
              <p class=" py-2 text-[0.7rem] lg:text-[0.95rem] px-0  lg:py-[0.7rem]">
                Sign in to your account to have hastle free experience
              </p>
              <button
                className=" text-gray-700 bg-transparent w-[110px] h-[35px]  text-[0.7rem] lg:w-[130px] lg:h-[41px] lg:text-[0.8rem]  font-semibold   border-2 border-white rounded-full transition-colors duration-300 hover:bg-white hover:text-gray-700"
                id="sign-in-btn"
                onClick={toggleSignUpMode}
              >
                Sign in
              </button>
            </div>
         
            <Image
              src={register}
              className={`  max-md:hidden w-[200px] lg:w-full transition-transform duration-[0.9s] lg:duration-[1.1s] ease-[ease-in-out] delay-[0.6s] lg:delay-[0.4s] ${
                isSignUpMode
                  ? ""
                  : "lg:translate-x-[800px]  max-lg:translate-y-[300px]"
              }`}
              alt="register"
            />  
          </div>
        </div>
      </div>
    </div>
  );
};
export default SlidingLoginSignup;
