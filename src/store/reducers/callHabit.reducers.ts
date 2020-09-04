import { CallHabitState, CallHabitAction } from "../types/callHabit.types";
import * as actions from "../actions/callHabit.actions";

const initialState: CallHabitState = {
  loading: false,
  error: null,
};

const callHabitReducer = (
  state: CallHabitState = initialState,
  action: CallHabitAction
) => {
  switch (action.type) {
    case actions.CALLHABIT_REQUEST:
      return {
        loading: true,
        error: null,
      };
    case actions.CALLHABIT_SUCCESS:
      return {
        loading: false,
        error: null,
        habits: action.payload,
      };
    case actions.CALLHABIT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default callHabitReducer;
