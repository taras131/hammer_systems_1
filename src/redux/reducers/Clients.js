import {SET_CLIENTS, DELETE_CLIENTS} from "../constants/Clients"
import userData from "../../assets/data/user-list.data.json"

const initState = {
    loading: false,
    message: '',
    showMessage: false,
    clients: userData,
}

const clients = (state = initState, action) => {
    switch (action.type) {
        case SET_CLIENTS:
            return {
                ...state,
                clients: action.clients
            }
        case DELETE_CLIENTS:
            return {
                ...state, clients: state.clients.filter(elm => elm.id !== action.clientId)
            }
        default:
            return state
    }
}

export default clients