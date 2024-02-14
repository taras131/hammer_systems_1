import {
    MOVE_ACTIVE_ELEMENT,
    ADD_ACTIVE_ELEMENT,
    ROTATE_ELEMENT,
    SET_ACTIVE_ELEMENTS,
    SHOW_PLANNER_MESSAGE,
    HIDDEN_PLANNER_MESSAGE,
    SET_PLANNER_LOADING,
    FETCH_ADD_PLAN,
    FETCH_UPDATE_PLAN,
    FETCH_REMOVE_PLAN, REMOVE_PLAN_ELEMENT
} from "../constants/Planner";

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

export const setActiveElements = (elements) => {
    return {
        type: SET_ACTIVE_ELEMENTS,
        payload: elements
    }
};

export const showPlannerMessage = (message) => {
    return {
        type: SHOW_PLANNER_MESSAGE,
        message
    }
};

export const hiddenPlannerMessage = () => {
    return {
        type: HIDDEN_PLANNER_MESSAGE,
    }
};

export const setPlannerLoading = (loading) => {
    return {
        type: SET_PLANNER_LOADING,
        loading
    }
}
export const fetchAddPlan = (newPlan) => {
    return {
        type: FETCH_ADD_PLAN,
        newPlan
    }
}

export const fetchUpdatePlan = (updatedPlan, id) => {
    return {
        type: FETCH_UPDATE_PLAN,
        updatedPlan,
        id
    }
}
export const fetchRemovePlan = (id) => {
    return {
        type: FETCH_REMOVE_PLAN,
        id
    }
}
export const removeActivePlanElement = (id) => {
    return {
        type: REMOVE_PLAN_ELEMENT,
        id
    }
}
