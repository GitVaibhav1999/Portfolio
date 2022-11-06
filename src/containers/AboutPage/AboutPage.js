import React from "react";
import { DownlaodIcon } from "../../components/DownlaodIcon";
import { NavigateHead } from "../../components/NavigateHead/NavigateHead";
import { OpenNewTab } from "../../components/OpenNewTab";
import { RESUME_DOWNLOAD_LINK, RESUME_LINK } from "../../Constants";

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

  const handleResume = (action) => {
    if(action === 'open'){
      window.open(RESUME_LINK,'_blank')
    }
    if(action === 'download'){
      window.open(RESUME_DOWNLOAD_LINK,'_self')

    }
  }

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
          <span className="aboutPage__content__download font-s bold">
            <span>Resume</span>
            <span onClick={()=>handleResume('download')} className="icon cursor-pointer">
              <DownlaodIcon />
            </span>
            <span onClick={()=>handleResume('open')}  className="icon cursor-pointer">
              <OpenNewTab />
            </span>
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
