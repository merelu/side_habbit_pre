import { AxiosError } from "axios";

export const LOGIN_REQUEST = "USER_LOGIN_REQUEST" as const;
export const LOGIN_SUCCESS = "USER_LOGIN_SUCCESS" as const;
export const LOGIN_FAILURE = "USER_LOGIN_FAILURE" as const;
export const LOGOUT = "USER_LOGOUT" as const;

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
  return { type: LOGOUT };
};
