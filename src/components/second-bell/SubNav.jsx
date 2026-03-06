import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { ChevronRight } from 'lucide-react';

const SubNav = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80); // Trigger after main navbar
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Overview', path: '/second-bell' },
        { name: 'Framework', path: '/second-bell/framework' },
        { name: 'Program', path: '/second-bell/program' },
        { name: 'Interventions', path: '/second-bell/interventions' },
        { name: 'How It Works', path: '/second-bell/how-it-works' },
        { name: 'RSHS Score', path: '/second-bell/rshs' },
    ];

    return (
        <div className={cn(
            "w-full bg-slate-50 border-b border-gray-100 transition-all duration-300 z-40 sticky",
            isScrolled ? "top-[66px] shadow-sm backdrop-blur-md bg-slate-50/90" : "top-[88px]"
        )}>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center gap-2 md:gap-8 overflow-x-auto scrollbar-hide py-3 md:py-4">
                    <div className="flex items-center shrink-0 pr-4 md:pr-0 md:border-r border-gray-200">
                        <span className="text-primary-dark font-serif font-bold italic mr-2">Second Bell</span>
                        <ChevronRight className="w-4 h-4 text-gray-400 hidden md:block" />
                    </div>

                    <nav className="flex items-center gap-2 md:gap-6 shrink-0">
                        {links.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    end={link.path === '/second-bell'}
                                    className={cn(
                                        "text-sm font-medium px-3 py-1.5 rounded-full transition-all whitespace-nowrap",
                                        isActive
                                            ? "bg-primary text-white shadow-sm"
                                            : "text-gray-600 hover:bg-gray-100 hover:text-primary-dark"
                                    )}
                                >
                                    {link.name}
                                </NavLink>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SubNav;
