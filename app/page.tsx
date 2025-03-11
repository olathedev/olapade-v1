import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Journey from "@/components/home/Journey";
import Projects from "@/components/home/Projects";
import WhatIdo from "@/components/home/WhatIdo";
import Image from "next/image";
import { SiJavascript, SiTypescript } from "react-icons/si";

export default function Home() {
  return (
    <div className="text-foreground font-dosis relative">
      <SiTypescript
        color="#3178c6"
        className="h-[10rem] top-20  absolute w-[3rem] left-0 opacity-25 rotate-45 "
      />

      <SiJavascript
        color="#F5DE19"
        className="h-[10rem] top-[30rem]  absolute w-[3rem] right-0 opacity-25 rotate-45 hidden md:flex"
      />
      <div className="container mx-auto px-8 py-8 md:py-10 lg:px-20">
        <nav className="w-full flex justify-between">
          <h4 className="font-semibold text-xl">Olapade.</h4>
          <div className="flex items-center gap-2 text-white font-medium text-sm">
            <Image
              src="/images/spotify.webp"
              alt="spotify"
              height={25}
              width={25}
            />
            <p>My Spotify?</p>
          </div>
        </nav>

        <Hero />

        <About />

        <WhatIdo />
      </div>

      <Journey />
      <Projects />

      <div className="mt-[8rem] mb-10 w-full flex  flex-col items-center gap-10 justify-center text-center">
        <p className="w-[40%] text-xl font-poppins">
          I can help you design, improve or build the product experience for
          your new or existing products. Feel free to get in touch with me.
        </p>

        <h2 className="text-[5rem] font-semibold header">
          Do you have any Ideas?
        </h2>
      </div>

      <footer className="mt-16 container mx-auto px-8 py-8 md:py-10 lg:px-20">
        <p className="text-gray-500 md:text-lg">SAY HELLO</p>
      </footer>
    </div>
  );
}
