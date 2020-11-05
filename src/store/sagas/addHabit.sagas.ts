import { put, call, takeLatest } from "redux-saga/effects";
import { history } from "../../configureStore";
import { addHabit } from "../../services";
import { nomal_error, sb_success, todayHabitsRequest } from "../actions";
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
    yield put(sb_success("습관등록이 완료 되었습니다!"));
  } catch (e) {
    yield put(addHabitFailure(e));
    if (e?.message === "Network Error") {
      history.push("/networkerror");
    }
    if (e.response) {
      if (e.response.status === 400) {
        yield put(nomal_error(e?.response.data.name));
      } else if (e.response.status === 403) {
        yield put(nomal_error(e.response.data.message));
      }
    }
  }
}

export function* addHabitSaga() {
  yield takeLatest(ADDHABIT_REQUEST, addHabitRequestSaga);
}
