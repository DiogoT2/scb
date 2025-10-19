'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  animated?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    loading = false,
    animated = true,
    children, 
    disabled,
    ...props 
  }, ref) => {
    const { 
      onDrag, onDragEnd, onDragStart, onDragEnter, onDragExit, onDragLeave, onDragOver, onDrop,
      onAnimationStart, onAnimationEnd, onAnimationIteration,
      ...restProps 
    } = props;
    
    // Suppress unused variable warnings for destructured props
    void onDrag; void onDragEnd; void onDragStart; void onDragEnter; void onDragExit; void onDragLeave; void onDragOver; void onDrop;
    void onAnimationStart; void onAnimationEnd; void onAnimationIteration;
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary-600 active:bg-primary-700 shadow-md hover:shadow-lg',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-200 active:bg-secondary-300',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
      ghost: 'text-primary hover:bg-primary/10 active:bg-primary/20',
      accent: 'bg-accent text-accent-foreground hover:bg-accent-600 active:bg-accent-700 shadow-md hover:shadow-lg',
    };

    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-6 text-lg',
      xl: 'h-14 px-8 text-xl',
    };

    const buttonClasses = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      className
    );

    const buttonContent = (
      <>
        {loading && (
          <motion.div
            className="mr-2 h-4 w-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </motion.div>
        )}
        {children}
      </>
    );

    if (animated && !disabled && !loading) {
      return (
        <motion.button
          ref={ref}
          className={buttonClasses}
          disabled={disabled || loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          {...restProps}
        >
          {buttonContent}
        </motion.button>
      );
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        {...restProps}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
