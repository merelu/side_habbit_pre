import * as getactions from "../actions/getHabits.actions";
import { Habit } from "../../services/api";

export type HabitsAction =
  | ReturnType<typeof getactions.getHabitsRequest>
  | ReturnType<typeof getactions.getHabitsSuccess>
  | ReturnType<typeof getactions.getHabitsFailure>;

export type HabitsState = {
  loading?: boolean;
  error?: Error;
  habits?: Habit[];
};
