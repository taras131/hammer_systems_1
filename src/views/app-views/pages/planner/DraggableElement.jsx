import {useDrag} from 'react-dnd'
import {ItemTypes} from './ItemTypes.js'
import {useState} from "react";
import {rotateActiveElement} from "../../../../redux/actions/Planner";
import {useDispatch} from "react-redux";
import {memo, useEffect} from 'react'
import Element from "./Element";

const getStyles = (width, height, left, top, isDragging, isStarting) => {
    const transform = `translate3d(${left}px, ${top}px, 0)`
    return {
        position: isStarting ? 'relative' : 'absolute',
        transform,
        WebkitTransform: transform,
        opacity: isDragging ? 0 : 1,
    }
}

const DraggableElement = ({
                              id,
                              left,
                              top,
                              title,
                              width,
                              height,
                              color,
                              hideSourceOnDrag,
                              isRotate,
                              img,
                              children,
                              isStarting = false
                          }) => {
    const dispatch = useDispatch()
    const [mouse, setMouse] = useState({x: 0, y: 0})
    const handleMouseMove = (event) => {
        if (isStarting) {
            const offsetX = event.nativeEvent.offsetX;
            const offsetY = event.nativeEvent.offsetY;
            setMouse({x: offsetX, y: offsetY})
        }
    }
    const [{isDragging}, drag, preview] = useDrag(
        () => ({
            type: ItemTypes.BOX,
            item: {id, left, top, width, height, mouse},
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),

        }),
        [id, left, top, mouse, width, height],
    )
    const handleDoubleClick = () => {
        if (!isStarting) {
            dispatch(rotateActiveElement(id))
        }
    }


    return (
        <div
            className="box"
            ref={drag}
            style={getStyles(width, height, left, top, isDragging, isStarting, isRotate, color, img)}
            onMouseMove={handleMouseMove}
            onDoubleClick={handleDoubleClick}
            role="DraggableBox"
        >
            <Element color={color} isStarting={isStarting} img={img} isRotate={isRotate} preview={preview} width={width}
                     height={height}/>
        </div>
    )
}

export default DraggableElement