import React, { ReactChild } from 'react'
import { ThemeProvider } from 'styled-components'

import { dark } from '../styles/theme'
import GlobalStyles from '../styles/globalStyles'

import Head from '../components/Head'

interface ILayoutProps {
  children: ReactChild
  location: {
    pathname: string
  }
}

export default ({ children, location }: ILayoutProps) => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Head pathname={location.pathname} />
      {children}
    </ThemeProvider>
  )
}
