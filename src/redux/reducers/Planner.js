import {

} from "../constants/Clients";

const initState = {
    loading: true,
    message: '',
    startElements: [
        {id: 0,width: 50, height: 50, color: "blue"},
        {id: 1,width: 70, height: 70, color: "red"},
        {id: 2,width: 20, height: 40, color: "black"},
    ]
}

const planner = (state = initState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default planner