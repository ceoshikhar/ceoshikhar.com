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
        background: "hsl(220, 39%, 5%)",
        background2: "hsl(220, 39%, 5%)",
        // Apply `opacity: x%` to get desired surface color.
        // Checkout: https://material.io/design/color/dark-theme.html#properties
        surface: "hsl(223, 48%, 8%)",
        primary: "hsl(213, 59%, 59%)",
        onBackground: "hsl(213, 30%, 70%)",
        onSurface: "hsl(210, 40%, 98%)",
        onPrimary: "hsl(210, 40%, 98%)",
    },
    screen: {
        xl: `@media only screen and (max-width: ${px2em(sizes.xl)})`,
        lg: `@media only screen and (max-width: ${px2em(sizes.lg)})`,
        md: `@media only screen and (max-width: ${px2em(sizes.md)})`,
        sm: `@media only screen and (max-width: ${px2em(sizes.sm)})`,
    },
};
