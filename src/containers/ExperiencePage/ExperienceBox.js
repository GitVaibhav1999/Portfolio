import React from "react";

export const ExperienceBox = ({ data }) => {
  const { duration, company, title, details } = data;

  return (
    <div className="experienceBox flex text-left">
      <span className="experienceBox__divider">
        <div className="experienceBox__divider__circle"></div>
        <div className="experienceBox__divider__line"></div>
      </span>
      <span className="experienceBox__content flex-column">
        <span className="bold font-m">{title}</span>
        <span>{company}</span>
        <span className="hand-written font-s flex-text">{duration}</span>
        <span
          className="experienceBox__content__details"
        >
          {details?.map((item) => (
            <span className="font-s">
              {item}
            </span>
          ))}
        </span>
      </span>
    </div>
  );
};
