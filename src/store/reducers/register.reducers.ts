import { RegisterState, RegisterAction } from "../types/register.types";
import * as actions from "../actions/register.acitons";

const registerReducer = (state: RegisterState = {}, action: RegisterAction) => {
  switch (action.type) {
    case actions.REGISTER_REQUEST:
      return {
        loading: true,
      };
    case actions.REGISTER_SUCCESS:
      return {};
    case actions.REGISTER_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;
