import * as React from "react";
import { ThemeProvider } from "styled-components";

import { dark } from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";

import { ISEOProps, SEO } from "./SEO";

export const Layout: React.FC<ISEOProps> = (props) => {
  const { children, ...SEOProps } = props;

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <SEO {...SEOProps} />
      {children}
    </ThemeProvider>
  );
};
