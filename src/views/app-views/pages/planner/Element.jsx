import React from 'react';

const Element = ({width, height, color, id}) => {
    return (
        <div style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: color,
            cursor: "pointer"
        }}>

        </div>
    );
};

export default Element;