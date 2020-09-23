import React, { MouseEvent, useState } from "react";
import {
  ListItem,
  Checkbox,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { listStyle } from "../../styles/styles";
import HabitItemMenu from "./HabitItemMenu";
import { useDispatch } from "react-redux";
import { removeHabitRequest } from "../../store/actions";

type HabitItemProps = {
  id: number;
  username: string;
  habbitName: string;
  habbitColor: string;
};

function HabitItem({ id, username, habbitName, habbitColor }: HabitItemProps) {
  const theme = useTheme();
  const useStyles = makeStyles(listStyle(theme, habbitColor));
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const dispatch = useDispatch();
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    dispatch(removeHabitRequest(username, id));
    setAnchorEl(null);
  };
  return (
    <>
      <ListItem className={classes.listItem} dense button>
        <ListItemIcon>
          <Checkbox edge="end" />
        </ListItemIcon>
        <ListItemText primary={habbitName} />
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
