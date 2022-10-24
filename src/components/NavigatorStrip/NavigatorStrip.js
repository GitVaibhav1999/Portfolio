import React, { Fragment } from "react";

import { Link, useHref, useNavigate } from "react-router-dom";
import { HomeIcon } from "../HomeIcon";
import { config, keyCodes } from "../../Constants";

import "./NavigatorStrip.scss";
import { useKeyStroke } from "../../Hooks/useKeyStroke";
import { PressKey } from "../PressKey/PressKey";
import { SpaceIcon } from "../SpaceIcon";

export const NavigatorStrip = () => {
  const search = useHref();
  const navigate = useNavigate();

  const isSelected = (type) => {
    if (search.includes(type)) return true;
    return false;
  };

  const handleNextPage = () => {
    const search = window.location.href;
    const currentIndex = config.findIndex((obj) => search.includes(obj.title));
    console.log("current index", currentIndex, search);
    const newIndex = (currentIndex + 1) % config.length;
    navigate(`/${config[newIndex].title}`);
  };

  const handleGoHome = () => {
    navigate(`/`);
  };

  useKeyStroke(keyCodes.SPACE_BAR, handleNextPage);
  useKeyStroke(keyCodes.ESC, handleGoHome);

  return (
    <Fragment>
      <div className="NavigatorStrip">
        {config.map(({ title, color }) => (
          <Link
            key={title}
            to={`/${isSelected(title) ? "" : title}`}
            style={{ backgroundColor: color }}
            className={`NavigatorStrip__child  ${
              isSelected(title) && "selected"
            }`}
          >
            <div className="title_container hand-written bold font-l">
              {title}
            </div>
          </Link>
        ))}
      </div>
      {!!(search === "/") && (
        <div className="navigationKeys">
          <PressKey title={"Press space to navigate"} keyIcon={<SpaceIcon />} />
          <PressKey
            title={"Press Esc. to home page"}
            keyIcon={<span className="bold font-ss">Esc</span>}
          />
        </div>
      )}
    </Fragment>
  );
};
