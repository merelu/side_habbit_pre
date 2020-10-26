import { RegisterState, RegisterAction } from "../types/register.types";
import * as actions from "../actions/register.acitons";

const registerReducer = (state: RegisterState = {}, action: RegisterAction) => {
  switch (action.type) {
    case actions.REGISTER_REQUEST:
      return {
        loading: true,
      };
    case actions.REGISTER_SUCCESS:
      return {
        registered: true,
      };
    case actions.REGISTER_FAILURE:
      return {
        error: action.payload,
      };
    case actions.REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

export default registerReducer;
