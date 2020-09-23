import {
  GET_HABITS_FAILURE,
  GET_HABITS_REQUEST,
  GET_HABITS_SUCCESS,
  REMOVE_HABIT_FAILURE,
  REMOVE_HABIT_REQUEST,
  REMOVE_HABIT_SUCCESS,
} from "../actions";
import { HabitsState, HabitsAction } from "../types/Habits.types";

const habitsReducer = (state: HabitsState = {}, action: HabitsAction) => {
  switch (action.type) {
    case GET_HABITS_REQUEST:
      return {
        loading: true,
      };
    case GET_HABITS_SUCCESS:
      return {
        habits: action.payload,
      };
    case GET_HABITS_FAILURE:
      return {
        error: action.payload,
      };
    case REMOVE_HABIT_REQUEST:
      return {
        loading: true,
      };
    case REMOVE_HABIT_SUCCESS:
      return {
        habits: action.payload,
      };
    case REMOVE_HABIT_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
};

export default habitsReducer;
