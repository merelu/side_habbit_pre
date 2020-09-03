import { all } from "redux-saga/effects";
import { registerSaga } from "./register.sagas";
import { loginSaga } from "./login.sagas";
import { addHabitSaga } from "./addHabit.sagas";

export const rootSaga = function* root() {
  yield all([registerSaga(), loginSaga(), addHabitSaga()]);
};
