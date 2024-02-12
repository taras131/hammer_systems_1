import {all, takeEvery, put, fork, call} from 'redux-saga/effects';
import {FETCH_CLIENTS} from '../constants/Clients';
import {hiddenClientsMessage, setClients, setClientsLoading, showClientsMessage} from "../actions/Clients";
import axios from 'axios';

function fetchClientsApi() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}

export function* getClients() {
    yield takeEvery(FETCH_CLIENTS, function* () {
        yield put(hiddenClientsMessage());
        yield put(setClientsLoading(true));
        try {
            const response = yield call(fetchClientsApi);
            console.log(response.data)
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

export default function* rootSaga() {
    yield all([
        fork(getClients),
    ]);
}

