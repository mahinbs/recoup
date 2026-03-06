import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const CircularScore = ({ score, label, color }) => {
    const [currentScore, setCurrentScore] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        // Animate the stroke dash array
        controls.start({
            strokeDashoffset: 440 - (440 * score) / 100,
            transition: { duration: 1.5, ease: "easeOut" }
        });

        // Animate the number counter
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / 1500, 1);
            // easeOutQuad
            const easedProgress = progress * (2 - progress);
            setCurrentScore(Math.floor(easedProgress * score));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [score, controls]);

    const circumference = 2 * Math.PI * 70; // r = 70

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-48 h-48 flex items-center justify-center mb-4">
                {/* Background Ring */}
                <svg className="absolute w-full h-full transform -rotate-90">
                    <circle
                        cx="96"
                        cy="96"
                        r="70"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        className="text-slate-100"
                    />
                    {/* Foreground Animated Ring */}
                    <motion.circle
                        cx="96"
                        cy="96"
                        r="70"
                        stroke={color}
                        strokeWidth="12"
                        strokeLinecap="round"
                        fill="transparent"
                        initial={{ strokeDashoffset: circumference }}
                        animate={controls}
                        style={{ strokeDasharray: circumference }}
                    />
                </svg>
                {/* Score Text */}
                <div className="absolute flex flex-col items-center">
                    <span className="text-4xl font-black text-primary-dark tracking-tighter" style={{ color: color }}>
                        {currentScore}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-1">/ 100</span>
                </div>
            </div>
            <h3 className="text-lg font-bold text-primary-dark">{label}</h3>
        </div>
    );
};

export default CircularScore;
