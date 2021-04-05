import React, { ReactChild } from "react";
import { ThemeProvider } from "styled-components";

import { dark } from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";

import { SEO } from "./SEO";

interface ILayoutProps {
  children: ReactChild;
  location: {
    pathname: string;
  };
}

export const Layout = ({ children, location }: ILayoutProps) => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <SEO pathname={location.pathname} />
      {children}
    </ThemeProvider>
  );
};
