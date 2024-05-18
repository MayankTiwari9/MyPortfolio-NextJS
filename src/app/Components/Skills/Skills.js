import React from "react";
import { technicalSkills, softSkills } from "../utils/SkillsData";

const Skills = () => {
  return (
    <div id="skills" className="bg-stone-800 text-white py-10">
      <div>
        <h1 className="text-3xl font-thin tracking-tight sm:text-4xl flex justify-center p-4">
          Skills
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-full p-5 justify-center items-center md:items-start">
        <div className="w-full md:w-1/2 m-4">
          <h4 className="text-3xl font-thin tracking-tight sm:text-4xl flex justify-center md:justify-start p-4">
            Technical Skills
          </h4>
          <div className="md:container md:mx-auto">
            {technicalSkills.map((skill) => (
              <div key={skill.title} className="mb-4">
                <h1 className="text-2xl font-thin tracking-tight sm:text-2xl m-2">
                  {skill.title}
                </h1>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 m-4">
          <h4 className="text-3xl font-thin tracking-tight sm:text-4xl flex justify-center md:justify-start p-4">
            Soft Skills
          </h4>
          <div className="md:container md:mx-auto">
            {softSkills.map((skill) => (
              <div key={skill.title} className="mb-4">
                <h1 className="text-2xl font-thin tracking-tight sm:text-2xl m-2">
                  {skill.title}
                </h1>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
