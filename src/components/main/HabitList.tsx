import React, { useState, useEffect } from "react";
import { List, makeStyles } from "@material-ui/core";
import { listStyle } from "../../styles/styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import { callHabitRequest } from "../../store/actions/callHabit.actions";
import HabitItem from "./HabitItem";

function HabitList() {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const useStyles = makeStyles(listStyle);
  const classes = useStyles();
  const { habits } = useSelector((state: RootState) => state.callHabitReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof userId === "string")
      dispatch(callHabitRequest(userId, new Date()));
  }, [dispatch, userId]);

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
