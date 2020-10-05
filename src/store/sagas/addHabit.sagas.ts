import { put, call, takeLatest } from "redux-saga/effects";
import { addHabit } from "../../services";
import {
  ADDHABIT_REQUEST,
  addHabitRequest,
  addHabitFailure,
  addHabitSuccess,
} from "../actions/addHabit.actions";

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
