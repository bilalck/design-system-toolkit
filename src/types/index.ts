import { ButtonHTMLAttributes } from 'react';

// Theme types
export type Color = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Button specific types
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Component base types
export interface BaseProps {
className?: string;
children?: React.ReactNode;
}

// Button component types
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
variant?: ButtonVariant;
size?: ButtonSize;
color?: Color;
disabled?: boolean;
loading?: boolean;
className?: string;
}

// Utility types
export type As<Props = unknown> = React.ElementType<Props>;
export type PropsWithAs<Props = Record<string, unknown>, Type extends As = As> =
Props & { as?: Type } & Omit<React.ComponentProps<Type>, keyof Props | 'as'>;
// src/types/index.ts
export * from './components';
