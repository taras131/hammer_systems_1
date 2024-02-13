import {ADD_ACTIVE_ELEMENT, MOVE_ACTIVE_ELEMENT, ROTATE_ELEMENT} from "../constants/Planner";
import table_1 from "../../assets/furniture/table_1.webp"
import table_2 from "../../assets/furniture/table_2.jpg"

const initState = {
    loading: true,
    message: '',
    startElements: [
        {id: 0, top: 0, left: 0, title: 'Стол № 1', width: 90, height: 90, color: "blue", isRotate: false, img: table_1},
        {id: 1, top: 0, left: 0, title: 'Стол № 2', width: 135, height: 90, color: "red", isRotate: false, img: table_2},
        {id: 2, top: 0, left: 0, title: 'Лавка № 1', width: 20, height: 70, color: "black", isRotate: false},
        {id: 5, top: 0, left: 0, title: 'Лавка № 2', width: 20, height: 90, color: "black", isRotate: false},
    ],
    activeElements: {}
}

const planner = (state = initState, action) => {
    switch (action.type) {
        case MOVE_ACTIVE_ELEMENT:
            const {id, left, top} = action.payload
            return {
                ...state,
                activeElements: {
                    ...state.activeElements,
                    [id]: {...state.activeElements[action.payload.id], left: left, top: top}
                }
            }
        case ADD_ACTIVE_ELEMENT:
            const newElement = {...state.startElements.find(el => el.id === action.payload.id)}
            return {
                ...state,
                activeElements: {
                    ...state.activeElements,
                    [action.payload.newId]: {
                        ...newElement,
                        id: action.payload.newId,
                        left: action.payload.deltaX,
                        top: action.payload.deltaY
                    }
                }
            }
        case ROTATE_ELEMENT:

            return {
                ...state,
                activeElements: {...state.activeElements,
                    [action.payload]: {
                        ...state.activeElements[action.payload],
                        isRotate: !state.activeElements[action.payload].isRotate
                    }
                }
            }
        default:
            return state
    }
}

export default planner