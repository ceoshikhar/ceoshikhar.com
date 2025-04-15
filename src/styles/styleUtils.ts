import { css, StyleFunction, DefaultTheme } from "styled-components";

export const sizes = {
    xl: 1366,
    lg: 1024,
    md: 768,
    sm: 480,
};

export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
    (accumulator, label) => {
        const emSize = sizes[label] / 16;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        accumulator[label] = (first: any, ...interpolations: any[]) => css`
            @media (max-width: ${emSize}em) {
                ${css(first, ...interpolations)}
            }
        `;
        return accumulator;
    },

    {} as { [key in keyof typeof sizes]: StyleFunction<DefaultTheme> }
);

export const px2em = (px: number) => `${px / 16}em`;
