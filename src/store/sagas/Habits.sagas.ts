import { put, call, takeLatest, takeEvery } from "redux-saga/effects";

import { callTodayHabit, removeHabit } from "../../services";
import * as actions from "../actions";

function* callTodayHabitsSaga(
  action: ReturnType<typeof actions.todayHabitsRequest>
) {
  //const { payload } = action;
  try {
    const response = yield call(callTodayHabit);
    yield put(actions.todayHabitsSuccess(response));
  } catch (e) {
    yield put(actions.todayHabitsFailure(e));
  }
}

function* removeHabitSaga(
  action: ReturnType<typeof actions.removeHabitRequest>
) {
  try {
    const { payload } = action;
    const response = yield call(removeHabit, payload.username, payload.id);
    yield put(actions.removeHabitSuccess(response));
  } catch (e) {
    yield put(actions.removeHabitFailure(e));
  }
}

export function* habitsSaga() {
  yield takeLatest(actions.TODAY_HABITS_REQUEST, callTodayHabitsSaga);
  yield takeLatest(actions.REMOVE_HABIT_REQUEST, removeHabitSaga);
  yield takeEvery(actions.ADDHABIT_SUCCESS, callTodayHabitsSaga);
}
