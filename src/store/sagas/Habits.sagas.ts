import { put, call, takeLatest, takeEvery } from "redux-saga/effects";

import { callTodayHabit, deleteHabit } from "../../services";
import * as actions from "../actions";
import { sb_success } from "../actions";

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
  action: ReturnType<typeof actions.deleteHabitRequest>
) {
  try {
    const { payload } = action;
    yield call(deleteHabit, payload.pk);
    yield put(actions.deleteHabitSuccess());
    yield put(sb_success("습관삭제가 완료 되었습니다!"));
  } catch (e) {
    yield put(actions.deleteHabitFailure(e));
  }
}

export function* habitsSaga() {
  yield takeLatest(actions.TODAY_HABITS_REQUEST, callTodayHabitsSaga);
  yield takeLatest(actions.DELETE_HABIT_REQUEST, removeHabitSaga);
  yield takeLatest(actions.DELETE_HABIT_SUCCESS, callTodayHabitsSaga);
  yield takeEvery(actions.ADDHABIT_SUCCESS, callTodayHabitsSaga);
}
