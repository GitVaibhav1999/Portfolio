import React from "react";

import "./ContactPage.scss";
import { NavigateHead } from "../../components/NavigateHead/NavigateHead";
import { EmailSection } from "../EmailSection/EmailSection";
import { OtherContact } from "./OtherContact";

export const ContactPage = () => {
  return (
    <div className="contactPage">
      <NavigateHead type={"Contacts"} />
      <div className="contactPage__main">
        <EmailSection />
        <OtherContact />
      </div>
    </div>
  );
};
