import { put, call, takeLatest } from "redux-saga/effects";
import {
  REGISTER_REQUEST,
  registerRequest,
  registerFailure,
  registerSuccess,
  sb_success,
  nomal_error,
} from "../actions";
import { authRegister } from "../../services";
import { history } from "../../configureStore";

function* registerRequestSaga(action: ReturnType<typeof registerRequest>) {
  const { payload } = action;
  try {
    yield call(authRegister, payload);
    yield put(registerSuccess());
    yield put(sb_success("회원가입이 완료되었습니다!"));
  } catch (e) {
    yield put(registerFailure(e));
    yield put(nomal_error(e?.response.data.email));
    if (e?.message === "Network Error") {
      history.push("/networkerror");
    }
  }
}

export function* registerSaga() {
  yield takeLatest(REGISTER_REQUEST, registerRequestSaga);
}
