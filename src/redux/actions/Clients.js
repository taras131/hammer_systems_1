import {
    DELETE_CLIENTS,
    SET_CLIENTS,
    HIDDEN_CLIENTS_MESSAGE,
    SHOW_CLIENTS_MESSAGE,
    FETCH_CLIENTS, SET_CLIENTS_LOADING, CHANGE_CLIENT, FETCH_CLIENT_BY_ID, SET_EDITION_CLIENT
} from "../constants/Clients";


export const setClients = (clients) => {
    return {
        type: SET_CLIENTS,
        clients
    }
};

export const deleteClients = (clientId) => {
    return {
        type: DELETE_CLIENTS,
        clientId
    }
};

export const showClientsMessage = (message) => {
    return {
        type: SHOW_CLIENTS_MESSAGE,
        message
    }
};

export const hiddenClientsMessage = () => {
    return {
        type: HIDDEN_CLIENTS_MESSAGE,
    }
};

export const fetchClients = () => {
    return {
        type: FETCH_CLIENTS
    }
}
export const fetchClientByID = (id) => {
    return {
        type: FETCH_CLIENT_BY_ID,
        id
    }
}

export const setClientsLoading = (loading) => {
    return {
        type: SET_CLIENTS_LOADING,
        loading
    }
}

export const changeClient = (changedClient) => {
    return {
        type: CHANGE_CLIENT,
        changedClient
    }
}
export const setEditionClient = (client) => {
    return {
        type: SET_EDITION_CLIENT,
        client
    }
}