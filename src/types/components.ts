import { ComponentPropsWithRef, ElementType } from 'react';

// Polymorphic component types
export type AsProps<E extends ElementType = ElementType> = {
as?: E;
};

export type PropsToOmit<E extends ElementType, P> = keyof (AsProps<E> & P);

export type PolymorphicComponentProp<
E extends ElementType,
P = {}
> = AsProps<E> & Omit<ComponentPropsWithRef<E>, PropsToOmit<E, P>> & P;

// Common component props
export type BaseProps = {
className?: string;
children?: React.ReactNode;
};

export type SizeProps = {
size?: 'sm' | 'md' | 'lg';
};

export type VariantProps = {
variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
};

export type LoadingProps = {
loading?: boolean;
loadingText?: string;
};

// Button specific props
export type ButtonProps = BaseProps &
SizeProps &
VariantProps &
LoadingProps & {
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

