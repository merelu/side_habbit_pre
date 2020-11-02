import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import { callHabitsRequest } from "../../store/actions";
import { List } from "@material-ui/core";
import HabitItem from "./HabitItem";
import { habitListStyle } from "../../styles";

function HabitList() {
  const classes = habitListStyle();
  const { habits } = useSelector((state: RootState) => state.habitsReducer);
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [checked, setChecked] = useState<number[]>([]);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
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
  useEffect(() => {
    dispatch(callHabitsRequest());
  }, [dispatch]);
  console.log(checked);
  return (
    <List className={classes.root}>
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
