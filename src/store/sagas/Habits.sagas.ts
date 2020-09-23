import { put, call, takeLatest } from "redux-saga/effects";

import { callHabit, removeHabit } from "../../services/api";
import {
  GET_HABITS_REQUEST,
  REMOVE_HABIT_REQUEST,
  getHabitsRequest,
  getHabitsSuccess,
  getHabitsFailure,
  removeHabitRequest,
  removeHabitFailure,
  removeHabitSuccess,
} from "../actions";

function* getHabitsSaga(action: ReturnType<typeof getHabitsRequest>) {
  const { payload } = action;
  try {
    const response = yield call(callHabit, payload.username, payload.today);
    yield put(getHabitsSuccess(response));
  } catch (e) {
    yield put(getHabitsFailure(e));
  }
}

function* removeHabitSaga(action: ReturnType<typeof removeHabitRequest>) {
  try {
    const { payload } = action;
    const response = yield call(removeHabit, payload.username, payload.id);
    yield put(removeHabitSuccess(response));
  } catch (e) {
    yield put(removeHabitFailure(e));
  }
}

export function* habitsSaga() {
  yield takeLatest(GET_HABITS_REQUEST, getHabitsSaga);
  yield takeLatest(REMOVE_HABIT_REQUEST, removeHabitSaga);
}
