import React, { useState } from 'react';

const Dot = ({x,y}) => {
 
 
 
    return (
      <div
        style={{
          top: `${y}px`,
          left: `${x}px`,
        }}
        className={`w-3 h-3 bg-white mix-blend-difference rounded-full relative   `}></div>
    );
};

export default Dot;