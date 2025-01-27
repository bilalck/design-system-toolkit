// Design tokens
export const colors = {
// Brand colors
primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
},
// Neutral colors
gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
},
// Semantic colors
success: '#22c55e',
warning: '#f59e0b',
error: '#ef4444',
info: '#3b82f6',
}

// Spacing scale (in pixels)
export const spacing = {
px: '1px',
0: '0',
0.5: '0.125rem',
1: '0.25rem',
1.5: '0.375rem',
2: '0.5rem',
2.5: '0.625rem',
3: '0.75rem',
3.5: '0.875rem',
4: '1rem',
5: '1.25rem',
6: '1.5rem',
7: '1.75rem',
8: '2rem',
9: '2.25rem',
10: '2.5rem',
12: '3rem',
14: '3.5rem',
16: '4rem',
20: '5rem',
24: '6rem',
28: '7rem',
32: '8rem',
36: '9rem',
40: '10rem',
44: '11rem',
48: '12rem',
52: '13rem',
56: '14rem',
60: '15rem',
64: '16rem',
72: '18rem',
80: '20rem',
96: '24rem',
}

// Breakpoints
export const breakpoints = {
sm: '640px',
md: '768px',
lg: '1024px',
xl: '1280px',
'2xl': '1536px',
}

// Typography
export const typography = {
fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
},
fontWeights: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
},
}

// Component-specific constants
export const buttonConfig = {
sizes: {
    sm: {
    padding: `${spacing[2]} ${spacing[3]}`,
    fontSize: typography.fontSizes.sm,
    },
    md: {
    padding: `${spacing[2.5]} ${spacing[4]}`,
    fontSize: typography.fontSizes.base,
    },
    lg: {
    padding: `${spacing[3]} ${spacing[5]}`,
    fontSize: typography.fontSizes.lg,
    },
},
variants: {
    primary: {
    bg: colors.primary[600],
    text: colors.gray[50],
    hover: colors.primary[700],
    active: colors.primary[800],
    },
    secondary: {
    bg: colors.gray[200],
    text: colors.gray[900],
    hover: colors.gray[300],
    active: colors.gray[400],
    },
    ghost: {
    bg: 'transparent',
    text: colors.gray[900],
    hover: colors.gray[100],
    active: colors.gray[200],
    },
},
}

