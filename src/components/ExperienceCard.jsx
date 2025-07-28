import React from "react";

const ExperienceCard = ({ experience, addToRefs }) => {
  const {
    company,
    duration,
    role,
    project,
    location,
    mode,
    techStack,
    responsibilities,
  } = experience;

  return (
    <div
      ref={addToRefs}
      className="p-6 rounded-lg shadow-customPurpleBoxShadow"
    >
      <h3 className="transition-colors duration-500 text-xl font-semibold">
        {company}
      </h3>
      <p className="transition-colors duration-500 text-sm">
        {location} | {duration} | {mode}
      </p>

      <div className="mt-4">
        <h4 className="transition-colors duration-500 text-lg font-medium">
          Role:
        </h4>
        <p className="transition-colors duration-500">{role}</p>
      </div>

      <div className="mt-4">
        <h4 className="transition-colors duration-500 text-lg font-medium">
          Project:
        </h4>
        <p className="transition-colors duration-500">{project}</p>
      </div>

      <div className="mt-4">
        <h4 className="transition-colors duration-500 text-lg font-medium">
          Responsibilities:
        </h4>
        <ul className="transition-colors duration-500 list-disc list-outside mt-2 px-5">
          {responsibilities.map((item, index) => (
            <li className="pb-2" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-col md:flex-row gap-2 items-center">
        <h4 className="transition-colors duration-500 text-lg font-medium">
          Tech Stack:
        </h4>
        <div className="flex flex-wrap gap-4 transition-colors duration-500 sm:justify-center">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 ${tech.color} ${tech.darkBgColor} ${tech.textColor} ${tech.darkTextColor} px-4 py-2 rounded-full`}
            >
              {tech.logo && (
                <img src={tech.logo} alt={tech.name} className="w-6 h-6" />
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
