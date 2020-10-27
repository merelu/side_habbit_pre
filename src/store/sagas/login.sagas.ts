import {
  loginRequest,
  LOGIN_REQUEST,
  loginSuccess,
  loginFailure,
  sb_success,
  nomal_error,
} from "../actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { authLogin } from "../../services";
import { history } from "../../configureStore";

function* loginRequestSaga(action: ReturnType<typeof loginRequest>) {
  const { payload } = action;
  try {
    const response = yield call(authLogin, payload.email, payload.password);
    yield put(loginSuccess(response));
    yield put(sb_success("로그인 되었습니다!"));
    history.push("/");
  } catch (e) {
    yield put(loginFailure(e));
    if (e.response.status === 400) {
      yield put(nomal_error(e?.response.data.message));
    }
    if (e?.message === "Network Error") {
      history.push("/networkerror");
    }
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequestSaga);
}
