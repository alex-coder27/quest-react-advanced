import React, { useContext } from "react";
import { ThemeContext, themes } from "../../context/theme-switcher";
import { Button } from "./style";

export const ThemeSwitcherButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Button>
      <img
        src={theme.image}
        alt={theme.alt}
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
      />
    </Button>
  );
};