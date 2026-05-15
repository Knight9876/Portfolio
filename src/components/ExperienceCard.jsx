import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ExperienceCard = ({ experience, addToRefs }) => {
  const {
    company,
    duration,
    role,
    project,
    location,
    mode,
    websiteUrl,
    techStack,
    responsibilities,
  } = experience;

  return (
    <div
      ref={addToRefs}
      className="p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-professional hover:shadow-professional-indigo transition-all duration-300 border border-slate-100 dark:border-slate-800"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {company}
          </h3>
          <p className="text-primary-light dark:text-primary-dark font-semibold">
            {role}
          </p>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400 text-left md:text-right">
          <p>{duration}</p>
          <p>{location} | {mode}</p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-2">
          Project
        </h4>
        <div className="flex items-center gap-2 group">
          <p className="text-slate-700 dark:text-slate-300 font-medium">{project}</p>
          {websiteUrl && (
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-light transition-colors">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
            </a>
          )}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-2">
          Responsibilities
        </h4>
        <ul className="list-disc list-outside space-y-2 ml-4 text-slate-600 dark:text-slate-400">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`flex items-center gap-1.5 ${tech.color} ${tech.darkBgColor} ${tech.textColor} ${tech.darkTextColor} px-3 py-1 rounded-md text-sm font-medium`}
            >
              {tech.logo && (
                <img src={tech.logo} alt={tech.name} className="w-4 h-4" />
              )}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
