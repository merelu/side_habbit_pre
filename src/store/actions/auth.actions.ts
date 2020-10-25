import { AxiosError } from "axios";
import { setCookie } from "../../services";

export const LOGIN_REQUEST = "LOGIN_REQUEST" as const;
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" as const;
export const LOGIN_FAILURE = "LOGIN_FAILURE" as const;
export const LOGOUT = "LOGOUT" as const;
export const LOGIN_RESET = "LOGIN_RESET" as const;

export const loginRequest = (email: string, password: string) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});
export const loginSuccess = (email: string) => ({
  type: LOGIN_SUCCESS,
  payload: email,
});
export const loginFailure = (e: AxiosError) => {
  return { type: LOGIN_FAILURE, payload: e };
};

export const logout = () => {
  setCookie("auth", "", -1);
  return { type: LOGOUT };
};

export const loginReset = () => ({
  type: LOGIN_RESET,
});
