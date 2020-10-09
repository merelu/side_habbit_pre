import React, { useEffect } from "react";
import { List } from "@material-ui/core";
import { listStyle } from "../../styles/styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import HabitItem from "./HabitItem";
import { callHabitsRequest } from "../../store/actions";

type HabitListProps = {};
function HabitList() {
  const style = listStyle();
  const { habits } = useSelector((state: RootState) => state.habitsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callHabitsRequest());
  }, [dispatch]);

  return (
    <List className={style.list}>
      {habits &&
        habits.map((state, index) => (
          <HabitItem
            key={index}
            id={index}
            habitName={state.name}
            color={state.color}
          ></HabitItem>
        ))}
    </List>
  );
}
export default HabitList;
