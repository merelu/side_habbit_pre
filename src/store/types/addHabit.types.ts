import * as actions from "../actions/addHabit.actions";

export type AddHabitAction =
  | ReturnType<typeof actions.addHabitRequest>
  | ReturnType<typeof actions.addHabitSuccess>
  | ReturnType<typeof actions.addHabitFailure>;

export type AddHabitState = {
  loading: boolean;
  error: Error | null;
};
