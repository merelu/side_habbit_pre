import * as actions from "../actions";
import { HabitsState, HabitsAction } from "../types/Habits.types";

const habitsReducer = (state: HabitsState = {}, action: HabitsAction) => {
  switch (action.type) {
    case actions.CALL_HABITS_REQUEST:
      return {
        loading: true,
      };
    case actions.CALL_HABITS_SUCCESS:
      return {
        habits: action.payload,
      };
    case actions.CALL_HABITS_FAILURE:
      return {
        error: action.payload,
      };
    case actions.REMOVE_HABIT_REQUEST:
      return {
        loading: true,
      };
    case actions.REMOVE_HABIT_SUCCESS:
      return {
        habits: action.payload,
      };
    case actions.REMOVE_HABIT_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
};

export default habitsReducer;
