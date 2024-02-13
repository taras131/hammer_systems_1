import {MOVE_ACTIVE_ELEMENT, ADD_ACTIVE_ELEMENT, ROTATE_ELEMENT} from "../constants/Planner";

export const moveElement = (id, left, top) => {
    return {
        type: MOVE_ACTIVE_ELEMENT,
        payload: {id, left, top}
    }
};

export const addActiveElement = (id, newId, deltaX, deltaY) => {
    return {
        type: ADD_ACTIVE_ELEMENT,
        payload: {id, newId, deltaX, deltaY}
    }
};

export const rotateActiveElement = (id) => {
    return {
        type: ROTATE_ELEMENT,
        payload: id
    }
};
