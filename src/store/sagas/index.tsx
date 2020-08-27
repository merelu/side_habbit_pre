import { all } from "redux-saga/effects";
import { registerSaga } from "./register.sagas";

export const rootSaga = function* root() {
  yield all([registerSaga()]);
};
