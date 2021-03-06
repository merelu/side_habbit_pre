import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import registerReducer from "./register.reducers";
import authReducer from "./auth.reducers";
import addHabitReducer from "./addHabit.reducers";
import habitsReducer from "./Habits.reducers";
import alertReducer from "./alert.reducers";
import { RegisterState } from "../types/register.types";
import { authState } from "../types/auth.types";
import { AddHabitState } from "../types/addHabit.types";
import { HabitsState } from "../types/Habits.types";
import { alertState } from "../types/alert.types";
import { history } from "../../configureStore";

const rootReducer = () =>
  combineReducers({
    router: connectRouter(history),
    registerReducer,
    authReducer,
    addHabitReducer,
    habitsReducer,
    alertReducer,
  });

export default rootReducer;

export type RootState = {
  router: RouterState;
  registerReducer: RegisterState;
  authReducer: authState;
  addHabitReducer: AddHabitState;
  habitsReducer: HabitsState;
  alertReducer: alertState;
};
