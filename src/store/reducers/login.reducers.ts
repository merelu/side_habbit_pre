import { LoginState, loginAction } from "../types/login.types";
import * as actions from "../actions/login.actions";

function login(state: LoginState, action: loginAction) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: action.payload,
      };
    case actions.LOGIN_SUCCESS:
      return {
        loggingIns: false,
        loggedIn: true,
        user: action.payload,
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
      };
    default:
      return state;
  }
}

export default login;
