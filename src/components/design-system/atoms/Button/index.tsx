import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonVariant, ButtonSize, ButtonProps } from '@/types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
({ className, variant = 'primary', size = 'md', children, disabled, type = 'button', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants: Record<ButtonVariant, string> = {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
    };
    
    const sizes: Record<ButtonSize, string> = {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8',
    };
    
    return (
    <button
        type={type}
        className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
    >
        {children}
    </button>
    );
}
);

Button.displayName = 'Button';

