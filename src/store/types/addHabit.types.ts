import * as actions from "../actions/addHabit.actions";

export type AddHabitAction =
  | ReturnType<typeof actions.addHabitRequest>
  | ReturnType<typeof actions.addHabitSuccess>
  | ReturnType<typeof actions.addHabitFailure>;

export type AddHabitState = {
  loading?: boolean;
  error?: Error | null;
};

export type AddHabitInputs = {
  habbit_Name: string;
  period: number;
  habbit_color: string;
  checkedDayOfWeek: boolean[];
};
