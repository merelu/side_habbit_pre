import * as actions from "../actions/login.actions";

export type loginAction =
  | ReturnType<typeof actions.loginRequest>
  | ReturnType<typeof actions.loginSuccess>
  | ReturnType<typeof actions.loginError>;

export type LoginState = {
  loggingIn: boolean;
  loggedIn: boolean;
  user: string | null;
};
