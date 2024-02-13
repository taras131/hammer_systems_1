import {useCallback, useState, useRef} from 'react'
import {useDrop} from 'react-dnd'
import DraggableElement from './DraggableElement'
import {ItemTypes} from './ItemTypes.js'
import {useDispatch, useSelector} from "react-redux";
import {getActiveElements} from "../../../../redux/selectors/Planner";
import {addActiveElement, moveElement} from "../../../../redux/actions/Planner";

const style = {
    height: "400px", width: "100%", backgroundColor: "green", position: 'relative',
}

const PlanningField = ({hideSourceOnDrag}) => {
    const dispatch = useDispatch()
    const containerRef = useRef(null);
    const activeElements = useSelector(state => getActiveElements(state))
    const calculationCoordinates = (x, y, elementHeight, elementWidth) => {
        const res = {finalX: x, finalY: y}
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        if (x < 0) res.finalX = 0
        if (y < 0) res.finalY = 0
        if (x + elementWidth > width) res.finalX = width - elementWidth
        if (y + elementHeight > height) res.finalY = height - elementHeight
        return res
    }
    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item, monitor) {
                if (item.id < 1000) {
                    const clientOffset = monitor.getClientOffset();
                    if (clientOffset && containerRef.current) {
                        const containerRect = containerRef.current.getBoundingClientRect();
                        const containerX = containerRect.left + window.pageXOffset;
                        const containerY = containerRect.top + window.pageYOffset;
                        const clientX = clientOffset.x;
                        const clientY = clientOffset.y;
                        const scrollX = containerRef.current.scrollLeft;
                        const scrollY = containerRef.current.scrollTop;
                        const x = clientX - containerX + scrollX - item.mouse.x;
                        const y = clientY - containerY + scrollY - item.mouse.y;
                        const {finalX, finalY} = calculationCoordinates(x, y, item.height, item.width)
                        dispatch(addActiveElement(item.id, new Date().getTime(), finalX, finalY))
                    }
                } else {
                    const delta = monitor.getDifferenceFromInitialOffset()
                    const left = Math.round(item.left + delta.x)
                    const top = Math.round(item.top + delta.y)
                    const {finalX, finalY} = calculationCoordinates(left, top, item.height, item.width)
                    dispatch(moveElement(item.id, finalX, finalY))
                }
                return undefined
            },
        }),
        [],
    )
    const activeElementsList = Object.keys(activeElements).map((key) => {
        return (
            <DraggableElement
                key={key}
                {...activeElements[key]}
            />
        )
    })
    return (
        <div ref={containerRef}>
            <div ref={drop} style={style}>
                {activeElementsList}
            </div>
        </div>
    );
};

export default PlanningField;