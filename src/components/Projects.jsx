import React from "react";
import netflix from "../assets/portfolio/netflix.png";
import textify from "../assets/portfolio/textify.jpg";
import digitalmoney from "../assets/portfolio/Capture.PNG";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: netflix,
      link: "https://xujalz.github.io/Netflix/",     
      color: 'shadow-red-600', 
    },
    {
      id: 2,
      src: textify,
      link: "https://xujalz.github.io/TextiFy/",
      color: 'shadow-yellow-600',
    },
    {
      id: 3,
      src: digitalmoney,
      link: "https://xujalz.github.io/digitalmoney/",
      color: 'shadow-blue-600',
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white sm:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-10">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, color }) => (
            <div key={id} className={`shadow-lg ${color} rounded-lg`}>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-40 w-80"
              />
              <div className="flex items-center justify-center text-center">
                <a href={link} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
