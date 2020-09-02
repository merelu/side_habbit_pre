import * as actions from "../actions/register.acitons";

export type RegisterAction =
  | ReturnType<typeof actions.registerRequest>
  | ReturnType<typeof actions.registerSuccess>
  | ReturnType<typeof actions.registerFailure>;

export type RegisterState = {
  loading: boolean;
  error: Error | null;
};
