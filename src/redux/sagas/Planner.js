import {all, takeEvery, put, fork, call} from 'redux-saga/effects';
import {hiddenPlannerMessage, setPlannerLoading, showPlannerMessage} from "../actions/Planner";
import {FETCH_ADD_PLAN, FETCH_REMOVE_PLAN, FETCH_UPDATE_PLAN} from "../constants/Planner"
import FirebaseService from "../../services/FirebaseService";

export function* addPlan() {
    yield takeEvery(FETCH_ADD_PLAN, function* (data) {
        yield put(hiddenPlannerMessage());
        yield put(setPlannerLoading(true));
        try {
            yield call(FirebaseService.fetchAddPlan, data);

        } catch (err) {
            yield put(showPlannerMessage(err));
        } finally {
            yield put(showPlannerMessage("План сохранён"));
            yield put(setPlannerLoading(false));
        }
    });
}

export function* updatePlan() {
    yield takeEvery(FETCH_UPDATE_PLAN, function* (data) {
        yield put(hiddenPlannerMessage());
        yield put(setPlannerLoading(true));
        try {
            yield call(FirebaseService.fetchUpdatePlan, data);

        } catch (err) {
            yield put(showPlannerMessage(err));
        } finally {
            yield put(setPlannerLoading(false));
        }
        yield put(showPlannerMessage("План обновлён"));
    });
}

export function* removePlan() {
    yield takeEvery(FETCH_REMOVE_PLAN, function* (data) {
        yield put(hiddenPlannerMessage());
        yield put(setPlannerLoading(true));
        try {
            yield call(FirebaseService.fetchRemovePlan(data));
        } catch (err) {
            yield put(showPlannerMessage(err));
        } finally {
            yield put(setPlannerLoading(false));
        }
        yield put(showPlannerMessage("План удалён"));
    });
}


export default function* rootSaga() {
    yield all([
        fork(addPlan),
        fork(updatePlan),
        fork(removePlan),
    ]);
}