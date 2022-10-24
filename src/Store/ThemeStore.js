import create from "zustand";
import { themes } from "../Constants";

const useThemeStore = create((set) => ({
  theme: themes.light,
  toggleTheme: () =>
    set(({ theme }) => ({
      theme: theme === themes.dark ? themes.light : themes.dark,
    })),
}));

export default useThemeStore;
