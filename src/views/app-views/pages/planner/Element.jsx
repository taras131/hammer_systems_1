import {useDrag} from 'react-dnd'
import {ItemTypes} from './ItemTypes.js'
import {useState} from "react";
import {rotateActiveElement} from "../../../../redux/actions/Planner";
import {useDispatch} from "react-redux";
import {memo} from 'react'
import {CloseCircleOutlined} from "@ant-design/icons";

const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
};

const Element = memo(({
                          id, left, top, title, width, height, hideSourceOnDrag, isRotate, img,
                          isStarting = false, handleRemoveClick
                      }) => {
    const dispatch = useDispatch()
    const [mouse, setMouse] = useState({x: 0, y: 0})
    const handleMouseMove = (event) => {
        const offsetX = event.nativeEvent.offsetX;
        const offsetY = event.nativeEvent.offsetY;
        setMouse({x: offsetX, y: offsetY})
    }
    const [{isDragging}, drag] = useDrag(
        () => ({
            type: ItemTypes.BOX,
            item: {id, left, top, width, height, mouse},
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, left, top, mouse, width, height],
    )
    const styles = {
        width: width,
        height: height,
        left: left,
        top: top,
        cursor: 'move',
        position: isStarting ? 'relative' : ' absolute',
        opacity: isDragging && !isStarting ? 0 : 1,
    }
    const handleDoubleClick = () => {
        if (!isStarting) {
            dispatch(rotateActiveElement(id))
        }
    }
    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag}/>
    }
    return (
        <div>
            <div
                className="box"
                ref={drag}
                style={styles}
                onMouseMove={handleMouseMove}
                onDoubleClick={handleDoubleClick}
                data-testid="box"
            >
                <img src={isRotate ? img.rotate : img.noRotate} alt="furniture" style={imgStyle}/>
                {!isStarting && (
                    <div style={{position: "absolute", right: "3px", top: "2px", cursor: "pointer"}}
                         onClick={handleRemoveClick}>
                        <CloseCircleOutlined style={{color: "blue"}}/>
                    </div>
                )}
            </div>
            {isStarting && (<span>{title}</span>)}
        </div>
    )
})

export default Element