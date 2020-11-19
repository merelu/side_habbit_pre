export const SELECT_HABIT = "SELECT_HABIT" as const;

export const selectHabit = (value: number) => ({
  type: SELECT_HABIT,
  payload: value,
});
