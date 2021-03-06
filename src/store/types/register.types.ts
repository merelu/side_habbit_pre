import * as actions from "../actions/register.acitons";

export type RegisterAction =
  | ReturnType<typeof actions.registerRequest>
  | ReturnType<typeof actions.registerSuccess>
  | ReturnType<typeof actions.registerFailure>
  | ReturnType<typeof actions.registerReset>;

export type RegisterState = {
  loading?: boolean;
  registered?: boolean;
  error?: Error;
};
