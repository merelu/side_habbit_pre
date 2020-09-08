import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import registerReducer from "./register.reducers";
import loginReducer from "./auth.reducers";
import addHabitReducer from "./addHabit.reducers";
import habitsReducer from "./Habits.reducers";
import { RegisterState } from "../types/register.types";
import { authState } from "../types/auth.types";
import { AddHabitState } from "../types/addHabit.types";
import { HabitsState } from "../types/Habits.types";
import { History } from "history";

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    registerReducer,
    loginReducer,
    addHabitReducer,
    habitsReducer,
  });

export default rootReducer;

export type RootState = {
  router: RouterState;
  registerReducer: RegisterState;
  loginReducer: authState;
  addHabitReducer: AddHabitState;
  habitsReducer: HabitsState;
};
