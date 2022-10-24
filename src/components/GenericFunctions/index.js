import { themes } from "../../Constants";

export const setTheme = (theme) => {
  const currentTheme = localStorage.getItem("theme");
  let newTheme = themes.light;
  if (currentTheme === themes.light) newTheme = themes.dark;

  localStorage.setItem("theme", newTheme);
};
