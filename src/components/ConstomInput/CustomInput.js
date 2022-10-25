import React from "react";

import "./CustomInput.scss";

export const CustomInput = ({ value, borderColor, extraClass, placeHolder }) => {
  return (
    <input
      style={{ border: `2px solid #E6E3D9`, caretColor: borderColor }}
      value={value}
      placeholder={placeHolder}
      type="text"
      className={`customInput paper-border font-m ${extraClass}`}
    />
  );
};
