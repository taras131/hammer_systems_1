import {
    SET_CLIENTS,
    DELETE_CLIENTS,
    SHOW_CLIENTS_MESSAGE,
    HIDDEN_CLIENTS_MESSAGE,
    SET_CLIENTS_LOADING
} from "../constants/Clients"

const initState = {
    loading: true,
    message: '',
    showMessage: false,
    clients: [],
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
        case SHOW_CLIENTS_MESSAGE:
            return {
                ...state, message: action.message, showMessage: true
            }
        case HIDDEN_CLIENTS_MESSAGE:
            return {
                ...state, message: "", showMessage: false
            }
        case SET_CLIENTS_LOADING:
            return {
                ...state, loading: action.loading
            }
        default:
            return state
    }
}

export default clients