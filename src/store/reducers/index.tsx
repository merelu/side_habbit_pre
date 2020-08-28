import { History } from "history";
import { combineReducers, Reducer } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import registerReducer from "./register.reducers";
import loginReducer from "./login.reducers";
import { RegisterState } from "../types/register.types";
import { LoginState } from "../types/login.types";

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    registerReducer,
    loginReducer,
  });

export default rootReducer;

export type RootState = {
  router: RouterState;
  registerReducer: RegisterState;
  loginReducer: LoginState;
};
