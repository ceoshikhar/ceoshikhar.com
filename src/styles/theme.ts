import { DefaultTheme } from "styled-components";
import { px2em, sizes } from "../styles/styleUtils";

export type ThemeKind = "dark" | "light";

export interface IColor {
  background: string;
  background2: string;
  surface: string;
  primary: string;
  secondary?: string;
  onBackground: string;
  onSurface: string;
  onPrimary: string;
  onSecondary?: string;
}

export interface IScreen {
  xl: string;
  lg: string;
  md: string;
  sm: string;
}

export const dark: DefaultTheme = {
  name: "dark",
  color: {
    background: "#121212",
    background2: "#0D0D0D",
    // Apply `opacity: x%` to get desired surface color.
    // Checkout: https://material.io/design/color/dark-theme.html#properties
    surface: "#FFFFFF",
    primary: "#298FCA",
    onBackground: "#F0F0F0",
    onSurface: "#E1E1E1",
    onPrimary: "#F0F0F0"
  },
  screen: {
    xl: `@media only screen and (max-width: ${px2em(sizes.xl)})`,
    lg: `@media only screen and (max-width: ${px2em(sizes.lg)})`,
    md: `@media only screen and (max-width: ${px2em(sizes.md)})`,
    sm: `@media only screen and (max-width: ${px2em(sizes.sm)})`
  }
};
