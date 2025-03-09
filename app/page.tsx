import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Journey from "@/components/home/Journey";
import WhatIdo from "@/components/home/WhatIdo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-foreground font-dosis">
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
    </div>
  );
}
