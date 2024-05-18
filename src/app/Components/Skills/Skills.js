import React from "react";
import { technicalSkills, softSkills } from "../utils/SkillsData";

const Skills = () => {
  return (
    <div id="skills" className="bg-stone-800 text-white">
      <div>
        <h1 className="text-3xl mx-auto font-thin tracking-tight sm:text-4xl flex justify-center p-4">
          Skills
        </h1>
      </div>
      <div className="sm:block md:flex w-full p-5 justify-center ">
        <div className="w-1/2 m-4 sm:w-full">
          <h4 className="mx-auto font-thin tracking-tight sm:text-4xl flex justify-center p-4">Technical Skills</h4>
          <div class="md:container md:mx-auto">
            {technicalSkills.map((skill) => (
              <div key={skill.title}>
                <h1 className="text-2xl mx-auto font-thin tracking-tight sm:text-2xl m-2">
                  {skill.title}
                </h1>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    class="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 m-4 sm:w-full">
          <h4 className="mx-auto font-thin tracking-tight sm:text-4xl flex justify-center p-4">Soft Skills</h4>
          <div class="md:container md:mx-auto">
            {softSkills.map((skill) => (
              <div key={skill.title}>
                <h1 className="text-2xl mx-auto font-thin tracking-tight sm:text-2xl m-2">
                  {skill.title}
                </h1>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    class="bg-blue-600 h-2.5 rounded-full"
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
