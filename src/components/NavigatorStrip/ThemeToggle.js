import React from "react";
import { themes } from "../../Constants";
import useThemeStore from "../../Store/ThemeStore";
import { BulbIcon } from "../BulbIcon";

import './ThemeToggle.scss'

export const ThemeToggle = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <span
      onClick={toggleTheme}
      className="themeToggle cursor-pointer"
    >
      <BulbIcon isOn={theme === themes.dark} />
    </span>
  );
};
