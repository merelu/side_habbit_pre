import React from "react";
import {
  ListItem,
  Checkbox,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function HabitItem() {
  return (
    <>
      <ListItem dense button>
        <ListItemText />
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemSecondaryAction>
          <IconButton edge="end">
            <MenuIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
}

export default HabitItem;
