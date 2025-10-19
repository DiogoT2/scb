'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  hover?: boolean;
  animated?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = false, animated = true, children, ...props }, ref) => {
    const { 
      onDrag: _onDrag, onDragEnd: _onDragEnd, onDragStart: _onDragStart, onDragEnter: _onDragEnter, onDragExit: _onDragExit, onDragLeave: _onDragLeave, onDragOver: _onDragOver, onDrop: _onDrop,
      onAnimationStart: _onAnimationStart, onAnimationEnd: _onAnimationEnd, onAnimationIteration: _onAnimationIteration,
      ...restProps 
    } = props;
    const baseClasses = 'rounded-xl transition-all duration-200';
    
    const variants = {
      default: 'bg-white border border-gray-200 shadow-sm',
      elevated: 'bg-white shadow-lg hover:shadow-xl',
      outlined: 'bg-white border-2 border-primary/20',
      glass: 'bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg',
    };

    const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';

    const cardClasses = cn(
      baseClasses,
      variants[variant],
      hoverClasses,
      className
    );

    if (animated && hover) {
      return (
        <motion.div
          ref={ref}
          className={cardClasses}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          {...restProps}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={cardClasses} {...restProps}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('font-semibold leading-none tracking-tight text-lg', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
