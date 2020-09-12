import { AxiosError } from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST" as const;
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" as const;
export const LOGIN_FAILURE = "LOGIN_FAILURE" as const;
export const LOGOUT = "LOGOUT" as const;

export const loginRequest = (username: string, password: string) => ({
  type: LOGIN_REQUEST,
  payload: {
    username,
    password,
  },
});
export const loginSuccess = (username: string) => ({
  type: LOGIN_SUCCESS,
  payload: username,
});
export const loginError = (e: AxiosError) => ({
  type: LOGIN_FAILURE,
  error: true,
  payload: e,
});

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("userId");
  return { type: LOGOUT };
};
