import { Habit } from "../../services";
import * as actions from "../actions";

export type HabitsAction =
  | ReturnType<typeof actions.todayHabitsRequest>
  | ReturnType<typeof actions.todayHabitsSuccess>
  | ReturnType<typeof actions.todayHabitsFailure>
  | ReturnType<typeof actions.deleteHabitRequest>
  | ReturnType<typeof actions.deleteHabitSuccess>
  | ReturnType<typeof actions.deleteHabitFailure>
  | ReturnType<typeof actions.selectHabit>;

export type HabitsState = {
  loading?: boolean;
  error?: Error;
  habits: Habit[];
  selectedIndex: number;
};
