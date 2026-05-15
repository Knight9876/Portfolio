import React from "react";

const InternshipCard = ({ internship, addToRefs }) => {
  return (
    <div
      ref={addToRefs}
      className="p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-professional hover:shadow-professional-indigo transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col h-full"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {internship.company}
        </h3>
        <p className="text-primary-light dark:text-primary-dark font-semibold text-sm mt-1">
          {internship.location} | {internship.duration} | {internship.mode}
        </p>
      </div>

      <div className="mb-6 flex-grow">
        <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-3">
          Projects
        </h4>
        <ul className="space-y-4">
          {internship.projects.map((project, index) => (
            <li key={index} className="text-slate-700 dark:text-slate-300">
              <strong className="block text-slate-900 dark:text-slate-100 mb-1">{project.name}</strong>
              <span className="text-sm leading-relaxed">{project.description}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-2">
          Overview
        </h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {internship.description}
        </p>
      </div>

      <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
        <div className="flex flex-wrap gap-2">
          {internship.skills.map((skill, index) => (
            <div
              key={index}
              className={`flex items-center gap-1.5 ${skill.color} ${skill.darkBgColor} ${skill.textColor} ${skill.darkTextColor} px-3 py-1 rounded-md text-sm font-medium`}
            >
              <img src={skill.logo} alt={skill.name} className="w-4 h-4" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
