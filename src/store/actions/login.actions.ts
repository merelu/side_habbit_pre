import { AxiosError } from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST" as const;
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" as const;
export const LOGIN_FAILURE = "LOGIN_FAILURE" as const;

export const loginRequest = (username: string, password: string) => ({
  type: LOGIN_REQUEST,
  payload: {
    username,
    password,
  },
});
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});
export const loginError = (e: AxiosError) => ({
  type: LOGIN_FAILURE,
  error: true,
  payload: e,
});
