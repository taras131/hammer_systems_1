import axios from "axios";
import {API_GET_CLIENTS} from "../constants/ApiConstant";

const axiosService = {}

axiosService.getClients = function () {
    return axios.get(API_GET_CLIENTS);
}

axiosService.getClientById = function (data) {
    console.log(data.id)
    return axios.get(`${API_GET_CLIENTS}/${data.id}`);
}

export default axiosService