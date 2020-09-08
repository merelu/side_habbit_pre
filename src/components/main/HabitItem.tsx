import React from "react";
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

type HabitItemProps = {
  habbitName: string;
  habbitColor: string;
};

function HabitItem({ habbitName, habbitColor }: HabitItemProps) {
  const theme = useTheme();
  const useStyles = makeStyles(listStyle(theme, habbitColor));
  const classes = useStyles();
  return (
    <>
      <ListItem className={classes.listItem} dense button>
        <ListItemIcon>
          <Checkbox edge="start" />
        </ListItemIcon>
        <ListItemText primary={habbitName} />
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
