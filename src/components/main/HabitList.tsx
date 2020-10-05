import React, { useState, useEffect } from "react";
import { List, makeStyles } from "@material-ui/core";
import { listStyle } from "../../styles/styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import HabitItem from "./HabitItem";
import { getHabitsRequest } from "../../store/actions";

type HabitListProps = {};
function HabitList() {
  const useStyles = makeStyles(listStyle);
  const classes = useStyles();
  const { habits } = useSelector((state: RootState) => state.habitsReducer);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getHabitsRequest(username, new Date()));
  // }, [dispatch, username]);

  return (
    <List className={classes.list}>
      {habits &&
        habits.map((state, index) => (
          <HabitItem
            key={index}
            id={index}
            habitName={state.habit_Name}
            color={state.color}
          ></HabitItem>
        ))}
    </List>
  );
}
export default HabitList;
