import { AddHabitState, AddHabitAction } from "../types/addHabit.types";
import * as actions from "../actions/addHabit.actions";

const initialState: AddHabitState = {
  loading: false,
  error: null,
};

const addHabitReducer = (
  state: AddHabitState = initialState,
  action: AddHabitAction
) => {
  switch (action.type) {
    case actions.ADDHABIT_REQUEST:
      return {
        loading: true,
        error: null,
      };
    case actions.ADDHABIT_SUCCESS:
      return {
        loading: false,
        error: null,
      };
    case actions.ADDHABIT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addHabitReducer;
