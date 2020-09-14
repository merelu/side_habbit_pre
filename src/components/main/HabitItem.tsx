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

type HabitItemProps = {
  habbitName: string;
  habbitColor: string;
};

function HabitItem({ habbitName, habbitColor }: HabitItemProps) {
  const theme = useTheme();
  const useStyles = makeStyles(listStyle(theme, habbitColor));
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
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
          {/* HabitItemMenu가 IconButton내에 위치하게되면 제대로 동작하지 않음 왜그럴까? 
            아마 내부에 위치하면 메뉴를 클릭하면 handleClose보다 onClick이벤트가 나중에 실행되서 메뉴창이 안닫히는 것같음
          */}
          <HabitItemMenu anchorEl={anchorEl} handleClose={handleClose} />
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
}

export default HabitItem;
