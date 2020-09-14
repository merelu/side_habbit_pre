import React, { useState, useEffect } from "react";
import { List, makeStyles } from "@material-ui/core";
import { listStyle } from "../../styles/styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import HabitItem from "./HabitItem";
import { getHabitsRequest } from "../../store/actions";

type HabitListProps = {
  username: string;
};
function HabitList({ username }: HabitListProps) {
  const useStyles = makeStyles(listStyle);
  const classes = useStyles();
  const { habits } = useSelector((state: RootState) => state.habitsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHabitsRequest(username, new Date()));
  }, [dispatch, username]);

  return (
    <List className={classes.list}>
      {habits &&
        habits.map((state) => (
          <HabitItem
            key={state.id}
            habbitName={state.habbit_Name}
            habbitColor={state.habbit_color}
          ></HabitItem>
        ))}
    </List>
  );
}
export default HabitList;
