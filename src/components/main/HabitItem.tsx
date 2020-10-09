import React, { MouseEvent, useState } from "react";
import {
  ListItem,
  Checkbox,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { listStyle } from "../../styles/styles";
import HabitItemMenu from "./HabitItemMenu";
import { useDispatch } from "react-redux";
import { removeHabitRequest } from "../../store/actions";

type HabitItemProps = {
  id: number;
  habitName: string;
  color?: string;
};

function HabitItem({ id, habitName, color }: HabitItemProps) {
  const style = listStyle(color);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const dispatch = useDispatch();
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    //dispatch(removeHabitRequest(username, id));
    setAnchorEl(null);
  };
  return (
    <>
      <ListItem className={style.listItem} dense button>
        <ListItemIcon>
          <Checkbox edge="end" />
        </ListItemIcon>
        <ListItemText primary={habitName} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <HabitItemMenu
            anchorEl={anchorEl}
            handleClose={handleClose}
            handleDelete={handleDelete}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
}

export default HabitItem;
