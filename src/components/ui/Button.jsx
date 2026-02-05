import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? 'span' : motion.button;

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-light shadow-md',
        secondary: 'bg-secondary text-primary-dark hover:bg-accent/20 border border-primary/10',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'hover:bg-primary/5 text-primary',
        link: 'text-primary underline-offset-4 hover:underline',
        accent: 'bg-accent text-primary-dark hover:bg-accent-hover',
    };

    const sizes = {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-md px-8 text-lg',
        icon: 'h-10 w-10',
    };

    return (
        <Comp
            ref={ref}
            whileTap={{ scale: 0.98 }}
            className={cn(
                'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    );
});

Button.displayName = 'Button';

export { Button };
