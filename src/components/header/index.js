import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme-switcher";
import { Header } from './style'

export const Heading = ({children}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Header theme={theme}>
        {children}
    </Header>
  );
};