import { authState, authAction } from "../types/auth.types";
import * as actions from "../actions/auth.actions";

const user = JSON.parse(localStorage.getItem("user") || "{}");

const initialState: authState = user
  ? {
      loggingIn: false,
      loggedIn: true,
      user: null,
      error: null,
    }
  : {
      loggingIn: false,
      loggedIn: false,
      user: null,
      error: null,
    };
console.log(initialState.loggedIn);
function authReducer(state: authState = initialState, action: authAction) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        error: null,
      };
    case actions.LOGIN_SUCCESS:
      return {
        loggingIns: false,
        loggedIn: true,
        error: null,
        user: action.payload,
      };
    case actions.LOGIN_FAILURE:
      return {
        loggedIn: false,
        loggingIn: false,
        error: action.payload,
      };
    case actions.LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
}

export default authReducer;
