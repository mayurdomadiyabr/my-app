import React from 'react';

// Points to the Left (<--)
export const ArrowPointsLeft = () => (
    <svg className="absolute -left-20 top-1/2 w-24 h-24 text-orange-400 transform -translate-y-1/2 pointer-events-none hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        {/* Path starting from Right(100) curving to Left(0) */}
        <path d="M 100 50 Q 50 0, 0 50" strokeWidth="2" strokeDasharray="5,5" />
        {/* Arrow head at 0,50 */}
        <path d="M 10 40 L 0 50 L 10 60" strokeWidth="2" />
    </svg>
);

// Points to the Right (-->)
export const ArrowPointsRight = () => (
    <svg className="absolute -right-20 top-1/2 w-24 h-24 text-orange-400 transform -translate-y-1/2 pointer-events-none hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        {/* Path starting from Left(0) curving to Right(100) */}
        <path d="M 0 50 Q 50 100, 100 50" strokeWidth="2" strokeDasharray="5,5" />
        {/* Arrow head at 100,50 */}
        <path d="M 90 40 L 100 50 L 90 60" strokeWidth="2" />
    </svg>
);
