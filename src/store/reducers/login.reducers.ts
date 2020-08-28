import { LoginState, loginAction } from "../types/login.types";
import * as actions from "../actions/login.actions";

const initialState: LoginState = {
  loggingIn: false,
  loggedIn: false,
};
function loginReducer(state: LoginState = initialState, action: loginAction) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
      };
    case actions.LOGIN_SUCCESS:
      return {
        loggingIns: false,
        loggedIn: true,
      };
    case actions.LOGIN_FAILURE:
      return {
        loggedIn: false,
        loggingIn: false,
      };
    default:
      return state;
  }
}

export default loginReducer;
