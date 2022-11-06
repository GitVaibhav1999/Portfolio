import React from "react";

export const ExperienceBox = ({ data }) => {
  const { duration, company, title } = data;

  return (
    <div className="experienceBox flex text-left">
      <span className="experienceBox__divider">
        <div className="experienceBox__divider__circle"></div>
        <div className="experienceBox__divider__line"></div>
      </span>
      <span className="experienceBox__content flex-column">
        <span className="bold font-m">{title}</span>
        <span>{company}</span>
        <span className="hand-written">{duration}</span>
      </span>
    </div>
  );
};
