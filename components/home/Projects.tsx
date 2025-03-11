import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Clockvest web app",
      stack: "NextJs + Tailwind css",
      description:
        "The Future of Crowdfunding, Connecting Creators and Investors",
      link: "https://www.clockvest.com/",
    },

    {
      title: "GDG JOS website",
      stack: "NextJs + Tailwind css + framer motion",
      description: "Portfolio and event webiste for gdg jos",
      link: "https://gdg-jos-website-v1.vercel.app/",
    },

    {
      title: "Trofira Web applicatio",
      stack: "NextJs + Tailwind css + Zustand + Tanstack",
      description: "Vendor and admin of the food ordering app",
      link: "https://vendor.trofira.africa/",
    },

    {
      title: "Swapify",
      stack: "NextJs + Tailwind css",
      description: "Your Smart Barter Platform",
      link: "https://swapify.ee/",
    },

    {
      title: "Teekety",
      stack: "React + Tailwind css + Nodejs",
      description: "Your Smart Barter Platform",
      link: "https://events-ng.vercel.app/",
    },

    {
      title: "Lucky me",
      stack: "React + Solditity",
      description: "Your Smart Barter Platform",
      link: "https://luckyme-game1.vercel.app/",
    },
  ];

  return (
    <div className="container mx-auto px-20 grid grid-cols-3 my-10 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="p-10 bg-[#16161A] flex flex-col gap-4 border-b-0 hover:border-b transition-all duration-200"
        >
          <h5 className="text-lg header font-bold">{project.title}</h5>
          <p className="uppercase  text-sm">{project.stack}</p>
          <p className="text-sm"> {project.description} </p>

          <a href={project.link} target="_blank" className="">
            <div className="flex place-items-center mt-auto pt-6 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
              view
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
