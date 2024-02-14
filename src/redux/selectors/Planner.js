export const getStartElements = (state) => {
    return state.planner.startElements
}
export const getStartElementById = (state,id) => {
    return state.planner.startElements.find(el => el.id === id)
}
export const getActiveElements = (state) => {
    return state.planner.activeElements
}
export const getPlannerLoading = (state) => {
    return state.planner.loading
}

export const getPlannerMessage = (state) => {
    return state.planner.message
}