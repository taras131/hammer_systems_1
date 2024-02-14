import {all} from 'redux-saga/effects';
import Auth from './Auth';
import Clients from './Clients';
import Planner from './Planner';

export default function* rootSaga(getState) {
    yield all([
        Auth(),
        Clients(),
        Planner()
    ]);
}
