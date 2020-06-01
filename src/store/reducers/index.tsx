import { History } from "history";
import { combineReducers } from "redux";
import { RouterState, connectRouter } from "connected-react-router";

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
  });

export default rootReducer;
