import { put, call, takeLatest } from "redux-saga/effects";
import {
  CALLHABIT_REQUEST,
  callHabitRequest,
  callHabitFailure,
  callHabitSuccess,
} from "../actions/callHabit.actions";
import { callHabit } from "../../services/api";

function* callHabitRequestSaga(action: ReturnType<typeof callHabitRequest>) {
  const { payload } = action;
  try {
    const response = yield call(callHabit, payload.userId, payload.today);
    yield put(callHabitSuccess(response));
  } catch (e) {
    yield put(callHabitFailure(e));
  }
}

export function* callHabitSaga() {
  yield takeLatest(CALLHABIT_REQUEST, callHabitRequestSaga);
}
