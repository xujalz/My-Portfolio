import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodejs from "../assets/node.png";
import bootstrap from "../assets/Bootstrap_logo.png";
import expressjs from "../assets/expressjs_logo.png";
import mongodb from "../assets/mongodb_logo.png";
import java from "../assets/java_logo.jpg";
import sql from "../assets/sql_logo.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 6,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: expressjs,
      title: "Express JS",
      style: "shadow-white",
    },
    {
      id: 8,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: java,
      title: "Java",
      style: "shadow-white",
    },
    {
      id: 10,
      src: sql,
      title: "SQL",
      style: "shadow-blue-600",
    },
    {
      id: 11,
      src: github,
      title: "Github",
      style: "shadow-white",
    },
    {
      id: 12,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-cyan-300",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full pt-60"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-20 pb-40">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
