import React, { useState } from "react";
import {
  Avatar,
  Checkbox,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import clock from "../../img/clock.svg";
import dumbbell from "../../img/dumbbell.svg";
import study from "../../img/study.svg";
import { habitBodyStyle } from "../../styles";

type HabitItemProps = {
  habitName: string;
  pk: number;
  selectedIndex: number;
  habit_type: string;
  checked: number[];
  handleListItemClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => void;
  handleToggle: (pk: number) => () => void;
};

function HabitItem({
  habitName,
  pk,
  selectedIndex,
  checked,
  habit_type,
  handleListItemClick,
  handleToggle,
}: HabitItemProps) {
  const classes = habitBodyStyle();
  const selectIcon = (value: string) => {
    switch (value) {
      case "Excercise":
        return (
          <Avatar
            variant="rounded"
            src={dumbbell}
            alt="excercise"
            className={classes.list_avatar}
          ></Avatar>
        );
      case "Study":
        return (
          <Avatar
            variant="rounded"
            src={study}
            alt="study"
            className={classes.list_avatar}
          ></Avatar>
        );
      case "Time":
        return (
          <Avatar
            variant="rounded"
            src={clock}
            alt="time"
            className={classes.list_avatar}
          ></Avatar>
        );
      default:
        return <Avatar variant="rounded"></Avatar>;
    }
  };
  return (
    <React.Fragment>
      <ListItem
        button
        selected={selectedIndex === pk}
        onClick={(e) => handleListItemClick(e, pk)}
        className={classes.list_item}
      >
        <ListItemAvatar>{selectIcon(habit_type)}</ListItemAvatar>
        <ListItemText primary={habitName} />
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            onChange={handleToggle(pk)}
            checked={checked.indexOf(pk) !== -1}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </React.Fragment>
  );
}

export default HabitItem;
