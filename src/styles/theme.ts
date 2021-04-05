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

export type ThemeKind = "dark" | "light";

export interface ITheme {
  name: ThemeKind;
  color: IColor;
}

export const dark: ITheme = {
  name: "dark",
  color: {
    background: "#121212",
    background2: "#0D0D0D",
    surface: "#1E1E1E",
    primary: "#298FCA",
    onBackground: "#F0F0F0",
    onSurface: "#E1E1E1",
    onPrimary: "#F0F0F0"
  }
};
