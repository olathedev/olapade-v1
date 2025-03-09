const WhatIdo = () => {
  return (
    <section className=" bg-[#16161A] w-full flex flex-col md:flex-row justify-between">
      <div className="border-b md:border-b-0 md:border-r h-full md:w-1/2 flex px-6 md:pl-16">
        <div className="py-20 md:w-[60%]">
          <h2 className="header text-2xl md:text-4xl font-semibold font-poppins">
            I am a passionate & versatile Builder
          </h2>

          <p className="font-josefin pt-4 text-lg">
            Open source projects, web 2 & web 3 web apps and mobile apps
          </p>

          <button className="cursor-pointer py-3 mt-14 border border-foreground font-josefin w-full uppercase">
            See my works
          </button>
        </div>
      </div>

      <div className="sm:border-t md:border-t-0 md:border-l h-full md:w-1/2 px-6  md:pl-16">
        <div className="h-full py-20 md:w-[60%]">
          <h2 className="header text-2xl md:text-4xl font-semibold font-poppins">
            I love to teach, Speak & i write a little
          </h2>

          <p className="font-josefin pt-4 text-lg">
            About Engineering, PR & Marketing, learning and life in general.
          </p>

          <button className="py-3 cursor-pointer mt-14 border border-foreground font-josefin w-full uppercase">
            Say Hi, to me
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatIdo;
