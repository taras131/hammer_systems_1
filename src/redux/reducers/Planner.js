import {
    ADD_ACTIVE_ELEMENT, HIDDEN_PLANNER_MESSAGE,
    MOVE_ACTIVE_ELEMENT, REMOVE_PLAN_ELEMENT,
    ROTATE_ELEMENT,
    SET_ACTIVE_ELEMENTS, SET_PLANNER_LOADING,
    SHOW_PLANNER_MESSAGE
} from "../constants/Planner";
import {startElements} from "../../constants/PlannerConstants";

const initState = {
    message: '',
    showMessage: false,
    loading: false,
    startElements: startElements,
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
        case SET_ACTIVE_ELEMENTS:
            return {...state, activeElements: action.payload}
        case ROTATE_ELEMENT:
            const newHeight = state.activeElements[action.payload].width
            const newWidth = state.activeElements[action.payload].height
            return {
                ...state,
                activeElements: {
                    ...state.activeElements,
                    [action.payload]: {
                        ...state.activeElements[action.payload],
                        isRotate: !state.activeElements[action.payload].isRotate
                        , height: newHeight
                        , width: newWidth
                    }
                }
            }
        case SHOW_PLANNER_MESSAGE:
            return {...state, message: action.message, showMessage: true}
        case HIDDEN_PLANNER_MESSAGE:
            return {...state, message: "", showMessage: false}
        case SET_PLANNER_LOADING:
            return {...state, loading: action.loading}
        case REMOVE_PLAN_ELEMENT:
            const newActiveElements = {...state.activeElements}
            delete newActiveElements[action.id];
            return {...state, activeElements: newActiveElements}
        default:
            return state
    }
}

export default planner