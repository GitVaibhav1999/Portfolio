import React from "react";

export const ExperienceBox = ({data}) => {
  const { duration, company, title } = data;
    // debugger
  return (
    <div className="experienceBox flex-column text-left">
      <span className="bold">{title}</span>
      <span>{company}</span>
      <span className="hand-written font-m">{duration}</span>
    </div>
  );
};
