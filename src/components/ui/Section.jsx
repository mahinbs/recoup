import React from 'react';
import { cn } from '../../lib/utils';

const Section = React.forwardRef(({ className, id, children, ...props }, ref) => {
    return (
        <section
            id={id}
            ref={ref}
            className={cn("w-full py-8 md:py-16 lg:py-20 relative overflow-hidden", className)}
            {...props}
        >
            <div className="container px-4 md:px-6 relative z-10">
                {children}
            </div>
        </section>
    );
});

Section.displayName = "Section";

export { Section };
