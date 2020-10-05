import { authState, authAction } from "../types/auth.types";
import * as actions from "../actions/auth.actions";
import { getCookie } from "../../services";

let token = getCookie("auth");

const initialState: authState =
  token !== null
    ? {
        loggedIn: true,
        token,
      }
    : {};

function authReducer(state: authState = initialState, action: authAction) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        loggingIn: true,
        error: null,
      };
    case actions.LOGIN_SUCCESS:
      return {
        loggedIn: true,
      };
    case actions.LOGIN_FAILURE:
      return {
        error: action.payload,
      };
    case actions.LOGOUT:
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
}

export default authReducer;
