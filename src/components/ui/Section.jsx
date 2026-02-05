import React from 'react';
import { cn } from '../../lib/utils';

const Section = React.forwardRef(({ className, id, children, ...props }, ref) => {
    return (
        <section
            id={id}
            ref={ref}
            className={cn("w-full py-12 md:py-24 lg:py-32 relative overflow-hidden", className)}
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
