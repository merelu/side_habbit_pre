import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectHabit } from "../../store/actions";
import { List } from "@material-ui/core";
import HabitItem from "./HabitItem";
import { habitBodyStyle } from "../../styles";
import { Habit } from "../../services";
import { useHistory } from "react-router";
import { history } from "../../configureStore";

interface HabitListProps {
  habits?: Habit[];
  selectedIndex: number;
  toggleDetailed: (value: boolean) => void;
  handlePush: (value: boolean) => void;
}
function HabitList({
  habits,
  selectedIndex,
  toggleDetailed,
  handlePush,
}: HabitListProps) {
  const classes = habitBodyStyle();
  const [checked, setChecked] = useState<number[]>([]);
  const dispatch = useDispatch();
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (selectedIndex < 0) {
      dispatch(selectHabit(index));
      toggleDetailed(true);
    } else if (selectedIndex === index) {
      dispatch(selectHabit(-1));
      toggleDetailed(false);
      handlePush(true);
      history.push("/list");
    } else {
      dispatch(selectHabit(index));
      toggleDetailed(true);
    }
  };
  const handleToggle = (pk: number) => () => {
    const currentIndex = checked.indexOf(pk);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(pk);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <List className={`${classes.list_root}`}>
      {habits &&
        habits.map((state, idx) => (
          <HabitItem
            key={idx}
            pk={state.pk}
            idx={idx}
            habitName={state.name}
            habit_type={state.habit_type}
            selectedIndex={selectedIndex}
            handleListItemClick={handleListItemClick}
            handleToggle={handleToggle}
            checked={checked}
          ></HabitItem>
        ))}
    </List>
  );
}
export default HabitList;
