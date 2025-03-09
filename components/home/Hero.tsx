import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-fit md:place-items-center pt-24 md:pt-[140px] pb-[80px] space-y-10 flex flex-col md:flex-row md:justify-between">
      <div className="md:w-[50%]">
        <div className="text-[2.8em] lg:text-[3.5em]  uppercase leading-[1.1] font-semibold md:font-bold tracking-tight font-poppins inine-flex flex-col">
          <h1 className="header">FRONTEND</h1>
          <h1 className="header">ENGINEER.</h1>
        </div>

        <p className="pt-6 md:w-[88%]  font-medium font-poppins">
          I thrive in creating robust and scalable frontend solutions that
          deliver exceptional user experiences.
        </p>

        <div className="w-full flex space-x-8 font-josefin text-xs md:text-sm justify-cente mt-16 md:mt-20">
          <div className="">
            <p className="md:w-2/3">
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </p>
          </div>

          <div className="">
            <p className="md:w-2/3">
              Over a three years of experience building products for clients
              across africa.
            </p>
          </div>
        </div>
      </div>

      <div className="h-full flex justify-center md:justify-end relative">
        <div className="h-[300px] w-[90%] md:h-[400px]  md:w-[400px] top-0 bg-gray-400 right "></div>
        <span className="absolute h-[300px] w-1/2 md:h-[400px] md:w-[350px] -z-10 left-2 -top-2 md:-left-[1rem] md:-top-[1rem] border-2 border-gray-400"></span>
      </div>
    </div>
  );
};

export default Hero;
