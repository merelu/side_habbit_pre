import { History } from "history";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import registerReducer from "./register.reducers";

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    registerReducer,
  });

export default rootReducer;
