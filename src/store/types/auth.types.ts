import { AxiosError } from "axios";
import * as actions from "../actions/auth.actions";

export type authAction =
  | ReturnType<typeof actions.loginRequest>
  | ReturnType<typeof actions.loginSuccess>
  | ReturnType<typeof actions.loginFailure>
  | ReturnType<typeof actions.logout>;

export type authState = {
  loggingIn?: boolean;
  loggedIn?: boolean;
  error?: AxiosError;
};
