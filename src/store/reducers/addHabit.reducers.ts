import { AddHabitState, AddHabitAction } from "../types/addHabit.types";
import * as actions from "../actions/addHabit.actions";

const addHabitReducer = (state: AddHabitState = {}, action: AddHabitAction) => {
  switch (action.type) {
    case actions.ADDHABIT_REQUEST:
      return {
        loading: true,
      };
    case actions.ADDHABIT_SUCCESS:
      return {
        loading: false,
      };
    case actions.ADDHABIT_FAILURE:
      return {
        error: action.payload,
      };
    case actions.ADDHABIT_RESET:
      return {};
    default:
      return state;
  }
};

export default addHabitReducer;
