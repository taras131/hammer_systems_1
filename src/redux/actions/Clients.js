import {DELETE_CLIENTS} from "../constants/Clients";


export const deleteClients = (clientId) => {
    return {
        type: DELETE_CLIENTS,
        clientId
    }
};