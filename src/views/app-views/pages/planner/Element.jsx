import React from 'react';

const Element = ({color, width, height, img, isRotate, preview}) => {
    const styles = {
        width: `${width}px`,
        height: `${height}px`,
        transform: isRotate ? 'rotate(90deg)' : 'rotate(0)',
        transformOrigin: 'center',
        background: img ? `url(${img})` : color,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: 'move',
    }
    return (
        <div
            style={styles }
            role={preview ? 'BoxPreview' : 'Box'}
        >

        </div>
    );
};

export default Element;