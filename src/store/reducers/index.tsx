import { History } from "history";
import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import registerReducer from "./register.reducers";
import loginReducer from "./auth.reducers";
import addHabitReducer from "./addHabit.reducers";
import { RegisterState } from "../types/register.types";
import { authState } from "../types/auth.types";

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    registerReducer,
    loginReducer,
    addHabitReducer,
  });

export default rootReducer;

export type RootState = {
  router: RouterState;
  registerReducer: RegisterState;
  loginReducer: authState;
};
