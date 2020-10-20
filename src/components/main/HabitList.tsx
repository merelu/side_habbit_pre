import React, { useEffect } from "react";
import { listStyle } from "../../styles/styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import HabitItem from "./HabitItem";
import { callHabitsRequest } from "../../store/actions";

function HabitList() {
  const style = listStyle();
  const { habits } = useSelector((state: RootState) => state.habitsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callHabitsRequest());
  }, [dispatch]);

  return (
    <div className={style.list}>
      {habits &&
        habits.map((state, index) => (
          <HabitItem key={index} id={index} habitName={state.name}></HabitItem>
        ))}
    </div>
  );
}
export default HabitList;
