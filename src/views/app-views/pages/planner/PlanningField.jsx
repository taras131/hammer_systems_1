import {useRef} from 'react'
import {useDrop} from 'react-dnd'
import Element from './Element'
import {ItemTypes} from './ItemTypes.js'
import {useDispatch, useSelector} from "react-redux";
import {getActiveElements} from "../../../../redux/selectors/Planner";
import {
    addActiveElement,
    moveElement,
    removeActivePlanElement,
} from "../../../../redux/actions/Planner";
import UploadedPlans from "./UploadedPlans";

const style = {
    height: "400px",
    width: "100%",
    position: 'relative',
    border: "1px solid green",
    backgroundColor: "white",
    backgroundImage:
        "linear-gradient(to right, whitesmoke 1px, transparent 1px),linear-gradient(to bottom, whitesmoke 1px, transparent 1px)",
    backgroundSize: " 20px 20px"
}

const PlanningField = ({hideSourceOnDrag}) => {
    const dispatch = useDispatch()
    const containerRef = useRef(null);
    const activeElements = useSelector(state => getActiveElements(state))
    const handleActiveElementRemove = (id) => () => {
        dispatch(removeActivePlanElement(id))
    }
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
            <Element
                key={key} {...activeElements[key]}
                handleRemoveClick={handleActiveElementRemove(activeElements[key].id)}
            />
        )
    })
    return (
        <div ref={containerRef} style={{
            display: 'grid',
            gridTemplateColumns: '1fr 350px',
            gap: "20px",
        }}>
            <div ref={drop} style={style}>
                {activeElementsList}
            </div>
            <UploadedPlans/>
        </div>
    );
};

export default PlanningField;