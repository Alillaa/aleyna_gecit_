import React from 'react';

// Basit kelebek SVG'si
export const ButterflySVG = ({ className = "w-8 h-8 text-pink-500 dark:text-pink-400", style }) => (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M40,20 Q50,10 60,20 Q70,30 60,40 L50,35 L40,40 Q30,30 40,20 Z" />
        <path d="M40,80 Q50,90 60,80 Q70,70 60,60 L50,65 L40,60 Q30,70 40,80 Z" />
        <path d="M20,40 Q10,50 20,60 L35,50 L20,40 Z" />
        <path d="M80,40 Q90,50 80,60 L65,50 L80,40 Z" />
        <ellipse cx="50" cy="50" rx="5" ry="15" />
    </svg>
);

// Basit çiçek SVG'si
export const FlowerSVG = ({ className = "w-8 h-8 text-rose-500 dark:text-rose-400", style, ...props }) => (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="10" />
        <ellipse cx="50" cy="30" rx="10" ry="15" />
        <ellipse cx="70" cy="40" rx="10" ry="15" transform="rotate(60 70 40)" />
        <ellipse cx="70" cy="60" rx="10" ry="15" transform="rotate(120 70 60)" />
        <ellipse cx="50" cy="70" rx="10" ry="15" transform="rotate(180 50 70)" />
        <ellipse cx="30" cy="60" rx="10" ry="15" transform="rotate(240 30 60)" />
        <ellipse cx="30" cy="40" rx="10" ry="15" transform="rotate(300 30 40)" />
    </svg>
);