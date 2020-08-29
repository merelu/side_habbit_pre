import * as actions from "../actions/auth.actions";
import { User } from "../../services/api";

export type authAction =
  | ReturnType<typeof actions.loginRequest>
  | ReturnType<typeof actions.loginSuccess>
  | ReturnType<typeof actions.loginError>
  | ReturnType<typeof actions.logout>;

export type authState = {
  loggingIn: boolean;
  loggedIn: boolean;
  error: Error | null;
  user: User | null;
};
