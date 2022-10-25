import React from "react";
import { CustomInput } from "../../components/ConstomInput/CustomInput";

import "./EmailSection.scss";

export const EmailSection = () => {
  return (
    <div className="emailSection">
      <CustomInput borderColor={"#FE5A43"} placeHolder="Name" />
      <CustomInput borderColor={"#FE5A43"} placeHolder="Email" />
      <CustomInput
        borderColor={"#FE5A43"}
        extraClass="text-box"
        placeHolder="Write here ..."
      />
      <span className="emailSection__send paper-border hand-written bold font-l cursor-pointer">
        Send 
      </span>
    </div>
  );
};
