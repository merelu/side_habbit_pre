import { History } from "history";
import { combineReducers, Reducer } from "redux";
import { RouterState, connectRouter } from "connected-react-router";
import loginReducer from "./login_reducers";
import { LoginState } from "../reducers/login_reducers";

export type RootState = {
  loginReducer: LoginState;
  router: RouterState;
};

const rootReducer = (history: History): Reducer<RootState> =>
  combineReducers({
    router: connectRouter(history),
    loginReducer,
  });

export default rootReducer;
