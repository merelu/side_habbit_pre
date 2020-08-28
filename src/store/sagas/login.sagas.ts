import {
  loginRequest,
  LOGIN_REQUEST,
  loginSuccess,
  loginError,
} from "../actions/login.actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { authLogin } from "../../services/api";
import { history } from "../../configureStore";

function* loginRequestSaga(action: ReturnType<typeof loginRequest>) {
  const { payload } = action;
  try {
    yield call(authLogin, payload.username, payload.password);
    yield put(loginSuccess());
  } catch (e) {
    yield put(loginError(e));
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequestSaga);
}
