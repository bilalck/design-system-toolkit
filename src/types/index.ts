// Theme types
export type Color = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'solid' | 'outline' | 'ghost';

// Component base types
export interface BaseProps {
className?: string;
children?: React.ReactNode;
}

// Component specific types
export interface ButtonProps extends BaseProps {
variant?: Variant;
size?: Size;
color?: Color;
disabled?: boolean;
loading?: boolean;
onClick?: () => void;
}

// Utility types
export type As<Props = any> = React.ElementType<Props>;
export type PropsWithAs<Props = {}, Type extends As = As> =
Props & { as?: Type } & Omit<React.ComponentProps<Type>, keyof Props | 'as'>;

import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
variant?: ButtonVariant;
size?: ButtonSize;
className?: string;
}

