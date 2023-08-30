import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb- pt-20">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-8">
        As a driven and technically adept student, I possess a comprehensive skill
        set in the realms of Java programming, data structures, and MERN stack
        development. My academic journey has provided me with a deep
        understanding of software engineering principles in building efficient and
        scalable applications. Proficient in Java, I have successfully implemented
        various algorithms and data structures, honing my problem-solving
        abilities and ensuring optimal performance in complex projects.

        </p>

        <br />

        <p className="text-xl">
        In my current role as a student, I am constantly expanding my skillset through coursework and independent learning, seeking out new challenges and opportunities to apply my knowledge. Whether working on group projects or individual assignments, I bring a collaborative and solution-focused approach to all that I do.
        </p>
      </div>
    </div>
  );
};

export default About;
