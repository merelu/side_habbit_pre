import { put, call, takeLatest } from "redux-saga/effects";

import { callHabit } from "../../services/api";
import {
  GET_HABITS_REQUEST,
  getHabitsRequest,
  getHabitsSuccess,
  getHabitsFailure,
} from "../actions";

function* getHabitsSaga(action: ReturnType<typeof getHabitsRequest>) {
  const { payload } = action;
  try {
    const response = yield call(callHabit, payload.userId, payload.today);
    console.log(response);
    yield put(getHabitsSuccess(response));
  } catch (e) {
    yield put(getHabitsFailure(e));
  }
}

export function* habitsSaga() {
  yield takeLatest(GET_HABITS_REQUEST, getHabitsSaga);
}
