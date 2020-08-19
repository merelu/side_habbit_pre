import {
  LoginAction,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/login_actions";

let curUser;
const user = localStorage.getItem("user");
if (typeof user === "string") {
  curUser = JSON.parse(user);
}

export type LoginState = {
  loggingIn: boolean;
  loggedIn: boolean;
  user: string;
};

const initialState: LoginState = {
  loggingIn: false,
  loggedIn: false,
  user: curUser,
};

export default function loginReducer(
  state: LoginState = initialState,
  action: LoginAction
): LoginState {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loggingIn: true, user: action.payload };
    case LOGIN_SUCCESS:
      return { loggingIn: false, loggedIn: true, user: action.payload };
    case LOGIN_FAILURE:
      return { loggingIn: false, loggedIn: false, user: action.payload };
    case LOGOUT:
      return { ...state, loggingIn: false, loggedIn: false };
    default:
      return state;
  }
}
