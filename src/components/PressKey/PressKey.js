import React from "react";

import "./PressKey.scss";

export const PressKey = ({ keyIcon, title }) => {
  return (
    <div className="pressKey">
      <span className="pressKey__icon">{keyIcon}</span>
      <span className="hand-written font-ss italic">{title}</span>
    </div>
  );
};
