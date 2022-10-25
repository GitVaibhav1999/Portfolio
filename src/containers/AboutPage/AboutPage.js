import React from "react";
import { DownlaodIcon } from "../../components/DownlaodIcon";
import { NavigateHead } from "../../components/NavigateHead/NavigateHead";

import "./AboutPage.scss";

export const AboutPage = () => {
  const skills = [
    {
      name: "React",
      icon: "",
    },
    {
      name: "JavaScript",
      icon: "",
    },
    {
      name: "NodeJS",
      icon: "",
    },
  ];

  return (
    <div className="aboutPage flex">
      <section>
        <NavigateHead type={"About"} />
        <div className="aboutPage__content font-l">
          <span className="aboutPage__content__text">
            Hi, My name is Vaibhav Kumar Gautam, I am a Software Developer{" "}
            <br />
            located in India. I have an experience of 1 year in building web{" "}
            <br />
            applications. I Have worked in technologies like React, Node, etc.{" "}
            <br />
            <br />
            I am always open to explore new technologies and domains. <br />
            and always curious about improving code quality and scalability
          </span>
          <span className="aboutPage__content__download bold font-l cursor-pointer">
            <span>Resume</span>
            <span><DownlaodIcon /></span>
          </span>
        </div>
      </section>
      {/* <section>
        <div className="aboutPage__skills paper-border bold ">
          {skills.map(({ name, icon }) => (
            <div>{name}</div>
          ))}
        </div>
      </section> */}
    </div>
  );
};
