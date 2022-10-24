import React from "react";
import { CustomInput } from "../../components/ConstomInput/CustomInput";

import "./EmailSection.scss";

export const EmailSection = () => {
  return (
    <div className="emailSection">
      <CustomInput borderColor={"#e9c46a"} placeHolder="Name" />
      <CustomInput borderColor={"#e9c46a"} placeHolder="Email" />
      <CustomInput
        borderColor={"#e9c46a"}
        extraClass="text-box"
        placeHolder="Write here ..."
      />
      <span className="emailSection__send paper-border hand-written bold font-l cursor-pointer">
        Send 
      </span>
    </div>
  );
};
