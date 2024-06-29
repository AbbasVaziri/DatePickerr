import React from 'react';

const CustomCaption = ({ weekdaysLong }) => {
    return (
        <div className="flex justify-around items-center">
            {weekdaysLong.map((day, index) => (
                <p key={index} className="transform rotate-180 mb-[6px] text-center text-x" style={{ writingMode: 'vertical-rl' }}>
                    {day}
                </p>
            ))}
        </div>
    );
};

export default CustomCaption;
