import React, { forwardRef } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = forwardRef(({ project, index, settings }, ref) => (
  <div
    ref={ref}
    className={`group flex flex-col mb-20 p-8 rounded-3xl bg-white dark:bg-slate-900 shadow-professional hover:shadow-professional-indigo transition-all duration-500 border border-slate-100 dark:border-slate-800 lg:flex-row md:flex-row gap-12 ${index % 2 !== 0 ? "lg:flex-row-reverse md:flex-row-reverse" : ""
      } items-center`}
  >
    <div className="project-images lg:w-1/2 md:w-1/2 w-full overflow-hidden rounded-2xl shadow-lg">
      <Slider {...settings}>
        {project.img.map((image, i) => (
          <div key={i} className="focus:outline-none">
            <img
              src={image}
              alt={`${project.title} - ${i}`}
              loading="lazy"
              className={`w-full h-80 transition-transform duration-700 ease-in-out transform group-hover:scale-105 ${project.title === "Cosmic Explorer"
                  ? "object-contain bg-slate-50 dark:bg-slate-950"
                  : "object-cover"
                }`}
            />
          </div>
        ))}
      </Slider>
    </div>
    <div
      className={`description lg:w-1/2 md:w-1/2 w-full ${index % 2 !== 0
          ? "lg:text-right md:text-right"
          : "lg:text-left md:text-left"
        }`}
    >
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
        {project.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-lg">
        {project.description}
      </p>

      <div className="mb-8">
        <h4 className={`text-sm uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-3 ${index % 2 !== 0 ? "lg:text-right" : "lg:text-left"
          }`}>
          Technologies
        </h4>
        <div
          className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? "lg:justify-end md:justify-end" : "lg:justify-start md:justify-start"
            }`}
        >
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className={`flex items-center gap-1.5 ${tech.color} ${tech.darkBgColor} ${tech.textColor} ${tech.darkTextColor} px-3 py-1 rounded-md text-sm font-medium`}
            >
              {tech.logo && <img src={tech.logo} alt={tech.name} className="w-4 h-4" />}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`flex gap-6 items-center ${index % 2 !== 0 ? "lg:justify-end md:justify-end" : "lg:justify-start md:justify-start"
        }`}>
        {project.liveLink && (
          <a
            href={project.liveLink}
            className="flex items-center gap-2 text-primary-light dark:text-primary-dark font-bold hover:underline transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.githubLink}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-bold hover:text-primary-light dark:hover:text-primary-dark transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  </div>
));

export default ProjectCard;
