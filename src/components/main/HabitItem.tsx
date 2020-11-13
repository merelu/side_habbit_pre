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
  handleListItemClick,
  handleToggle,
}: HabitItemProps) {
  const classes = habitBodyStyle();

  return (
    <React.Fragment>
      <ListItem
        button
        selected={selectedIndex === pk}
        onClick={(e) => handleListItemClick(e, pk)}
        className={classes.list_item}
      >
        <ListItemAvatar>
          <Avatar
            variant="rounded"
            src={dumbbell}
            alt="dumbbell"
            className={classes.list_avatar}
          ></Avatar>
        </ListItemAvatar>
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
