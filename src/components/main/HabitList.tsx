import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import { selectHabit, todayHabitsRequest } from "../../store/actions";
import { List } from "@material-ui/core";
import HabitItem from "./HabitItem";
import { habitBodyStyle } from "../../styles";

interface HabitListProps {
  toggleDetailed: (value: boolean) => void;
  detailed: boolean;
  handlePush: (value: boolean) => void;
}
function HabitList({ detailed, toggleDetailed, handlePush }: HabitListProps) {
  const classes = habitBodyStyle();
  const { habits, selectedIndex } = useSelector(
    (state: RootState) => state.habitsReducer
  );
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
    } else {
      dispatch(selectHabit(index));
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
