import { ComponentPropsWithRef, ElementType } from 'react';

// Polymorphic component types
export type AsProps<E extends ElementType = ElementType> = {
as?: E;
};

export type PropsToOmit<E extends ElementType, P> = keyof (AsProps<E> & P);

export type PolymorphicComponentProp<
E extends ElementType,
P extends object = Record<string, unknown>
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

export interface StyleMap {
  [key: string]: string;
}

export interface Breakpoint {
  name: string;
  width: number;
  icon?: React.ReactNode;
}

export interface StyleCategory {
  name: string;
  properties: string[];
  icon?: React.ReactNode;
}

export interface StyleExtractorProps {
  selector: string;
  includeProperties?: string[];
  excludeProperties?: string[];
  onStylesExtracted?: (styles: StyleMap) => void;
  enableTokenMapping?: boolean;
  styleCategories?: StyleCategory[];
  exportFormat?: 'markdown' | 'css' | 'tailwind';
}

export interface PreviewProperty {
  id: string;
  name: string;
  type: 'text' | 'color' | 'number' | 'select' | 'boolean';
  default?: unknown;
  options?: string[];
}

export interface PreviewVariant {
  id: string;
  name: string;
  modifiers: Record<string, string | boolean>;
}

export interface PreviewTemplate {
  id: string;
  name: string;
  category: 'basic' | 'components' | 'layouts' | 'custom';
  icon?: React.ReactNode;
  description: string;
  content: React.ReactNode;
  variants?: PreviewVariant[];
  properties?: PreviewProperty[];
}

export interface StylePreviewProps {
  styles: StyleMap;
  className?: string;
  previewContent?: React.ReactNode;
  showResponsive?: boolean;
  customBreakpoints?: Breakpoint[];
  onBreakpointChange?: (breakpoint: Breakpoint) => void;
}
