import * as actions from "../actions";
import { HabitsState, HabitsAction } from "../types/Habits.types";
let habits = [];
let temp = localStorage.getItem("habits");
if (temp !== null) {
  habits = JSON.parse(temp);
}
const initialState: HabitsState = habits
  ? { habits, selectedIndex: -1 }
  : { selectedIndex: -1 };
console.log(initialState);

const habitsReducer = (
  state: HabitsState = initialState,
  action: HabitsAction
) => {
  switch (action.type) {
    case actions.TODAY_HABITS_REQUEST:
      return {
        loading: true,
      };
    case actions.TODAY_HABITS_SUCCESS:
      return {
        habits: action.payload,
      };
    case actions.TODAY_HABITS_FAILURE:
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
    case actions.SELECT_HABIT:
      return {
        ...state,
        selectedIndex: action.payload,
      };
    default:
      return state;
  }
};

export default habitsReducer;
