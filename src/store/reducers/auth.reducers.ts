import { authState, authAction } from "../types/auth.types";
import * as actions from "../actions/auth.actions";

let username;
let test = localStorage.getItem("username");
if (typeof test === "string") username = JSON.parse(test);

const initialState: authState =
  username !== null
    ? {
        loggedIn: true,
        username,
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
        username: action.payload,
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
