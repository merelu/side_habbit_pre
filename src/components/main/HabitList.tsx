import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import { todayHabitsRequest } from "../../store/actions";
import { List } from "@material-ui/core";
import HabitItem from "./HabitItem";
import { habitListStyle } from "../../styles";

interface HabitListProps {
  toggleDetailed: (value: boolean) => void;
  detailed: boolean;
}
function HabitList({ detailed, toggleDetailed }: HabitListProps) {
  const classes = habitListStyle();
  const { habits } = useSelector((state: RootState) => state.habitsReducer);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [checked, setChecked] = useState<number[]>([]);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (selectedIndex < 0) {
      setSelectedIndex(index);
      toggleDetailed(true);
    } else {
      setSelectedIndex(-1);
      toggleDetailed(false);
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
    <List className={`${classes.root} ${detailed && classes.selected}`}>
      {habits &&
        habits.map((state) => (
          <HabitItem
            key={state.pk}
            pk={state.pk}
            habitName={state.name}
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
