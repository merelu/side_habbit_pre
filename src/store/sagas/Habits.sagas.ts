import { put, call, takeLatest } from "redux-saga/effects";

import { callHabit, removeHabit } from "../../services";
import {
  CALL_HABITS_REQUEST,
  REMOVE_HABIT_REQUEST,
  callHabitsRequest,
  callHabitsSuccess,
  callHabitsFailure,
  removeHabitRequest,
  removeHabitFailure,
  removeHabitSuccess,
} from "../actions";

function* callHabitsSaga(action: ReturnType<typeof callHabitsRequest>) {
  //const { payload } = action;
  try {
    const response = yield call(callHabit);
    yield put(callHabitsSuccess(response));
  } catch (e) {
    yield put(callHabitsFailure(e));
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
  yield takeLatest(CALL_HABITS_REQUEST, callHabitsSaga);
  yield takeLatest(REMOVE_HABIT_REQUEST, removeHabitSaga);
}
