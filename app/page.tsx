import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-20 text-foreground font-dosis">
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

      <section className=" bg-[#16161A] w-full flex justify-between">
        <div className="border-r h-full w-1/2 flex pl-16">
          <div className="py-20 w-[60%]">
            <h2 className="header text-4xl font-semibold font-poppins">
              I am a passionate & versatile Builder
            </h2>

            <p className="font-josefin pt-4 text-lg">
              Open source projects, web 2 & web 3 web apps and mobile apps
            </p>

            <button className="py-3 mt-14 border border-foreground font-josefin w-full uppercase">
              See my works
            </button>
          </div>
        </div>

        <div className="border-l h-full w-1/2  pl-16">
          <div className="h-full py-20 w-[60%]">
            <h2 className="header text-4xl font-semibold font-poppins">
              I love to teach, Speak & i write a little
            </h2>

            <p className="font-josefin pt-4 text-lg">
              About Engineering, PR & Marketing, learning and life in general.
            </p>

            <button className="py-3 mt-14 border border-foreground font-josefin w-full uppercase">
              See my works
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
