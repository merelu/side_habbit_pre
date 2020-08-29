import {
  loginRequest,
  LOGIN_REQUEST,
  loginSuccess,
  loginError,
} from "../actions/auth.actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { authLogin } from "../../services/api";

function* loginRequestSaga(action: ReturnType<typeof loginRequest>) {
  const { payload } = action;
  try {
    const response = yield call(authLogin, payload.username, payload.password);
    yield put(loginSuccess(response));
  } catch (e) {
    yield put(loginError(e));
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequestSaga);
}
