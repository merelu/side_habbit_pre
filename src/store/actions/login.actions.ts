import { AxiosError } from "axios";

export const LOGIN_REQUEST = "USERS_LOGIN_REQUEST" as const;
export const LOGIN_SUCCESS = "USERS_LOGIN_SUCCESS" as const;
export const LOGIN_FAILURE = "USERS_LOGIN_FAILURE" as const;

export const loginRequest = (username: string) => ({
  type: LOGIN_REQUEST,
  payload: username,
});
export const loginSuccess = (data: string) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});
export const loginError = (e: AxiosError) => ({
  type: LOGIN_FAILURE,
  error: true,
  payload: e,
});
