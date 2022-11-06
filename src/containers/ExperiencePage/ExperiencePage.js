import React from "react";

import { NavigateHead } from "../../components/NavigateHead/NavigateHead";
import { experienceConfig } from "../../Constants";
import { ExperienceBox } from "./ExperienceBox";

import "./ExperiencePage.scss";

export const ExperiencePage = () => {
  return (
    <>
      <NavigateHead type={"Experience"} />
      <div className="experiencePage flex">
        <div className="experiencePage__overview flex-column">
          {experienceConfig.map((obj) => (
            <ExperienceBox key={obj.id} data={obj} />
          ))}
        </div>
      </div>
    </>
  );
};
