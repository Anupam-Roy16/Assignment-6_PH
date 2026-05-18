// import React from 'react';
import account_img from "/src/assets/user.png";
const Step = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="font-bold text-3xl">Get Started In 3 Steps</h1>
        <p className="opacity-70 text-sm mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-3 gap-6 mt-7">
        <div className="text-center p-5 bg-base-300 shadow-2xs">
          <div className="bg-violet-800 flex justify-center pt-1 w-9 h-9 rounded-full ml-auto ">
            <p className="text-white">01</p>
          </div>
          <div className="bg-base-300 w-22 h-22 rounded-full mx-auto">
            <div className="flex justify-center items-center pt-1">
              <img src={account_img} alt="" />
            </div>
          </div>

          <h1 className="font-bold text-xl mt-1">Create Account</h1>
          <p className="opacity-60 text-sm mt-1">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="text-center p-5 bg-base-300 shadow-2xs">
          <div className="bg-violet-800 flex justify-center pt-1 w-9 h-9 rounded-full ml-auto ">
            <p className="text-white">01</p>
          </div>
          <div className="bg-base-300 w-22 h-22 rounded-full mx-auto">
            <div className="flex justify-center items-center pt-1">
              <img src={account_img} alt="" />
            </div>
          </div>

          <h1 className="font-bold text-xl mt-1">Create Account</h1>
          <p className="opacity-60 text-sm mt-1">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="text-center p-5 bg-base-300 shadow-2xs">
          <div className="bg-violet-800 flex justify-center pt-1 w-9 h-9 rounded-full ml-auto ">
            <p className="text-white">01</p>
          </div>
          <div className="bg-base-300 w-22 h-22 rounded-full mx-auto">
            <div className="flex justify-center items-center pt-1">
              <img src={account_img} alt="" />
            </div>
          </div>

          <h1 className="font-bold text-xl mt-1">Create Account</h1>
          <p className="opacity-60 text-sm mt-1">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
      
      </div>
    </>
  );
};

export default Step;
