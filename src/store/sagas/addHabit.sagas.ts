import { put, call, takeLatest } from "redux-saga/effects";
import {
  ADDHABIT_REQUEST,
  addHabitRequest,
  addHabitFailure,
  addHabitSuccess,
} from "../actions/addHabit.actions";
import { addHabit } from "../../services/api";

function* addHabitRequestSaga(action: ReturnType<typeof addHabitRequest>) {
  const { payload } = action;
  try {
    yield call(addHabit, payload);
    yield put(addHabitSuccess());
  } catch (e) {
    yield put(addHabitFailure(e));
  }
}

export function* addHabitSaga() {
  yield takeLatest(ADDHABIT_REQUEST, addHabitRequestSaga);
}
