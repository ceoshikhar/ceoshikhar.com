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
        background: "#000A14",
        background2: "#001429",
        // Apply `opacity: x%` to get desired surface color.
        // Checkout: https://material.io/design/color/dark-theme.html#properties
        surface: "#FFFFFF",
        primary: "#00A8E8",
        onBackground: "#F0F0F0",
        onSurface: "#E1E1E1",
        onPrimary: "#04334D",
    },
    screen: {
        xl: `@media only screen and (max-width: ${px2em(sizes.xl)})`,
        lg: `@media only screen and (max-width: ${px2em(sizes.lg)})`,
        md: `@media only screen and (max-width: ${px2em(sizes.md)})`,
        sm: `@media only screen and (max-width: ${px2em(sizes.sm)})`,
    },
};
