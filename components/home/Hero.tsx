import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-fit place-items-center pt-[140px] pb-[80px] flex justify-between">
      <div className="w-[50%]">
        <div className="text-[3.5em]  uppercase leading-[1.1] font-bold tracking-tight font-josefin inine-flex flex-col">
          <h1 className="header">FRONTEND</h1>
          <h1 className="header">DEVELOPER.</h1>
        </div>

        <p className="pt-6 w-[88%] font-medium font-poppins">
          I thrive in creating robust and scalable frontend solutions that
          deliver exceptional user experiences.
        </p>

        <div className="w-full flex font-josefin text-sm justify-center mt-20">
          <div className="">
            <p className="w-2/3">
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </p>
          </div>

          <div className="">
            <p className="w-2/3">
              Over a three years of experience building products for clients
              across africa.
            </p>
          </div>
        </div>
      </div>

      <div className="h-full flex justify-end relative">
        <div className="h-[400px]  w-[400px] top-0 bg-gray-400 right ">

        </div>
        <span className="absolute h-[400px] w-[350px] -z-10 -left-[1rem] -top-[1rem] border-2 border-gray-400"></span>

      </div>
    </div>
  );
};

export default Hero;
