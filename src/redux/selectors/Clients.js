export const getClientById = (state, clientId) => {
    return state.clients.clients.filter(client => client.id === clientId)[0];
}
export const getAllClients = (state) => {
    return state.clients.clients;
}
export const getClientsIsLoading = (state) => {
    return state.clients.loading;
}
export const getEditionClient = (state) => {
    return state.clients.editionClient;
}