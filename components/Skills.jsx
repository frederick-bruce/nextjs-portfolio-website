/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState, useEffect } from "react";
import { client, urlFor } from "../client";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-screen">
        <p className="text-xl tracking-widest uppercase text-[#27a2bd]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>

        <div className="flex flex-wrap gap-4 justify-center py-4">
          {skills.map((skill, index) => (
            <div
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-tr from-[#1e7f94] to-[#0e3a43]
              text-white w-48 h-48"
              key={index}
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  src={urlFor(skill.image)}
                  alt={skill.name}
                  className="w-full h-full"
                />

                <div>{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
