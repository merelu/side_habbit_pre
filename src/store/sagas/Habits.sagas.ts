import { put, call, takeLatest } from "redux-saga/effects";

import { callHabit } from "../../services/api";
import {
  GET_HABITS_REQUEST,
  getHabitsRequest,
  getHabitsSuccess,
  getHabitsFailure,
} from "../actions";

function* habitsRequestSaga(action: ReturnType<typeof getHabitsRequest>) {
  const { payload } = action;
  try {
    const response = yield call(callHabit, payload.userId, payload.today);
    yield put(getHabitsSuccess(response));
  } catch (e) {
    yield put(getHabitsFailure(e));
  }
}

export function* callHabitSaga() {
  yield takeLatest(GET_HABITS_REQUEST, habitsRequestSaga);
}
