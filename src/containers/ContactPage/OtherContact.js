import React from "react";
import { GithubIcon } from "../../components/ContactIcons/GithubIcon";
import { InstagramIcon } from "../../components/ContactIcons/InstagramIcon";
import { Leetcode } from "../../components/ContactIcons/Leetcode";
import { LinkedinIcon } from "../../components/ContactIcons/LinkedinIcon";
import { Stickman } from "../../components/Stickman";

export const OtherContact = () => {
  const contacts = [
    {
      name: "linkedin",
      icon: <LinkedinIcon fill="grey" />,
    },
    {
      name: "github",
      icon: <GithubIcon fill="grey" />,
    },
    {
      name: "instagram",
      icon: <InstagramIcon fill="grey" />,
    },
    {
      name: "leetcode",
      icon: <Leetcode fill="grey" />,
    },
    
  ];

  return (
    <div className="otherContact">
      {contacts.map(({ name, icon }) => (
        <a href='' className="fill font-l hand-written semi-bold cursor-pointer">
          {icon}
          {/* {name} */}
        </a>
      ))}
    </div>
  );
};
