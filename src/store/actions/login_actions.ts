export const LOGIN_REQUEST = "USERS_LOGIN_REQUEST" as const;
export const LOGIN_SUCCESS = "USERS_LOGIN_SUCCESS" as const;
export const LOGIN_FAILURE = "USERS_LOGIN_FAILURE" as const;
export const LOGOUT = "USERS_LOGOUT" as const;
export const userActions = {
  request,
  success,
  failure,
};
function request(user: string) {
  return {
    type: LOGIN_REQUEST,
    payload: user,
  };
}
function success(user: string) {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
}
function failure(error: string) {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
}

export const logout = () => ({ type: LOGOUT });

export type LoginAction =
  | ReturnType<typeof request>
  | ReturnType<typeof success>
  | ReturnType<typeof failure>
  | ReturnType<typeof logout>;
