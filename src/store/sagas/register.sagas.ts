import { put, call, takeLatest } from "redux-saga/effects";
import {
  REGISTER_REQUEST,
  registerRequest,
  registerFailure,
  registerSuccess,
} from "../actions/register.acitons";
import { authRegister } from "../../services/api";

function* registerRequestSaga(action: ReturnType<typeof registerRequest>) {
  const { payload } = action;
  try {
    yield call(authRegister, payload);
    yield put(registerSuccess());
  } catch (e) {
    yield put(registerFailure(e));
  }
}

export function* registerSaga() {
  yield takeLatest(REGISTER_REQUEST, registerRequestSaga);
}
