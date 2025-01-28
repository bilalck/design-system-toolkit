import { ElementType } from 'react';

// Utility types
export type DeepPartial<T> = {
[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RecursivePartial<T> = {
[P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

// Type guards
export function isElementType<T extends ElementType>(
value: unknown
): value is T {
return typeof value === 'string' || typeof value === 'function';
}

export function isObject(value: unknown): value is object {
return typeof value === 'object' && value !== null;
}

// Helper types
export type WithRequired<T, K extends keyof T> = T & {
[P in K]-?: T[P];
};

export type MergeProps<T, U> = Omit<T, keyof U> & U;

// CSS related types
export type CSSValue = string | number;

export type CSSProperties = {
[key: string]: CSSValue | CSSProperties;
};

// Theme helper types
export type ThemeValue = string | number | CSSProperties;

export type ResponsiveValue<T> = T | Array<T | null> | { [key: string]: T };

