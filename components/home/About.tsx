import React from "react";

const About = () => {
  return (
    <div className="flex flex-col space-y-10 space-x-[10rem] py-10 md:py-20 md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="header  text-[2em] md:text-[3em] font-poppins font-semibold">
          Design
        </h1>

        <p className="font-josefin">
          I design, even though I'm probably not the typical designer sitting in
          front of an Illustrator artboard tweaking pixels. You can always find
          me buried in stylesheets, fiddling with font sizes and thinking about
          layouts (~_^). Creating fluid user experiences is something I'm
          committed to doing while looking chic.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="header text-[2em] md:text-[3em] font-poppins font-semibold">
          Engineering
        </h1>
        <p className="font-josefin">
          I have the ideal tools for developing Typescript/JavaScript
          applications, and I can definitely work without them to produce quick,
          durable solutions that are designed for growth – performance and
          scalability are top objectives on my radar.
        </p>
      </div>
    </div>
  );
};

export default About;
