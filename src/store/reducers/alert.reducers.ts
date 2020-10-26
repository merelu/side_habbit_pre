import * as actions from "../actions";
import { alertAction, alertState } from "../types/alert.types";

function alertReducer(state: alertState = {}, action: alertAction) {
  switch (action.type) {
    case actions.NOMAL_SUCCESS:
      return {
        alert_type: "success",
        message: action.payload,
      };
    case actions.NOMAL_ERROR:
      return {
        alert_type: "error",
        message: action.payload,
      };
    case actions.SB_SUCCESS:
      return {
        alert_type: "success",
        message: action.payload,
        sbOpen: true,
      };
    case actions.SB_ERROR:
      return {
        alert_type: "error",
        message: action.payload,
        sbOpen: true,
      };
    case actions.CLEAR:
      return {};

    default:
      return state;
  }
}

export default alertReducer;
