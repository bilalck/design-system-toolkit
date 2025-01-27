export type ColorScale = {
50: string;
100: string;
200: string;
300: string;
400: string;
500: string;
600: string;
700: string;
800: string;
900: string;
};

export type ThemeColors = {
primary: ColorScale;
secondary: ColorScale;
neutral: ColorScale;
success: ColorScale;
warning: ColorScale;
error: ColorScale;
};

export type Spacing = {
px: string;
0: string;
0.5: string;
1: string;
2: string;
3: string;
4: string;
5: string;
6: string;
8: string;
10: string;
12: string;
16: string;
20: string;
};

export type Breakpoints = {
sm: string;
md: string;
lg: string;
xl: string;
'2xl': string;
};

export type Typography = {
fontSizes: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
};
fontWeights: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
};
lineHeights: {
    none: number;
    tight: number;
    snug: number;
    normal: number;
    relaxed: number;
    loose: number;
};
};

export type Theme = {
colors: ThemeColors;
spacing: Spacing;
breakpoints: Breakpoints;
typography: Typography;
};

