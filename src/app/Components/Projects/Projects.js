import React from "react";
import projects from "../utils/ProjectData";

const Projects = () => {
  return (
    <div id="projects" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl lg:mx-0">
          <h1 className="text-3xl mx-auto font-bold tracking-tight text-gray-900 sm:text-4xl">
            Recent Projects
          </h1>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl  items-center grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex max-w-xl flex-col items-center justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <a href={project.href}>
                  <img class="rounded-t-lg" src={project.imageUrl} alt="" />
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={project.href}>
                    <span className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <a
                  href={project.href}
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Github Repository
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
