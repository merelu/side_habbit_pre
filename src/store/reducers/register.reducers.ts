import { RegisterState, RegisterAction } from "../types/register.types";
import * as actions from "../actions/register.acitons";
const initialState: RegisterState = {
  loading: false,
  error: null,
};
const registerReducer = (
  state: RegisterState = initialState,
  action: RegisterAction
) => {
  switch (action.type) {
    case actions.AUTH_REGISTER_REQUEST:
      return {
        loading: true,
        error: null,
      };
    case actions.AUTH_REGISTER_SUCCESS:
      return {
        loading: false,
        error: null,
      };
    case actions.AUTH_REGISTER_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;
