import {all, takeEvery, put, fork, call} from 'redux-saga/effects';
import {FETCH_CLIENT_BY_ID, FETCH_CLIENTS} from '../constants/Clients';
import {
    hiddenClientsMessage,
    setClients,
    setClientsLoading,
    setEditionClient,
    showClientsMessage
} from "../actions/Clients";
import axiosService from "../../services/AxiosService";


export function* getClients() {
    yield takeEvery(FETCH_CLIENTS, function* () {
        yield put(hiddenClientsMessage());
        yield put(setClientsLoading(true));
        try {
            const response = yield call(axiosService.getClients);
            if (response.data) {
                yield put(setClients(response.data));
            }
        } catch (err) {
            yield put(showClientsMessage(err));
        } finally {
            yield put(setClientsLoading(false));
        }
    });
}

export function* getClientById() {
    yield takeEvery(FETCH_CLIENT_BY_ID, function* (data) {
        yield put(hiddenClientsMessage());
        yield put(setClientsLoading(true));
        console.log(data)
        try {
            console.log("response")
            const response = yield call(axiosService.getClientById, data);
            console.log(response)
            if (response.data) {
                yield put(setEditionClient(response.data));
            }
        } catch (err) {
            yield put(showClientsMessage(err));
        } finally {
            yield put(setClientsLoading(false));
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(getClients),
        fork(getClientById),
    ]);
}

