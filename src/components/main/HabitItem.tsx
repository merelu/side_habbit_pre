import React, { MouseEvent, useState } from "react";
import { Grid, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { listStyle } from "../../styles/styles";
import HabitItemMenu from "./HabitItemMenu";

type HabitItemProps = {
  id: number;
  habitName: string;
};

function HabitItem({ id, habitName }: HabitItemProps) {
  const style = listStyle();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
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
      <Grid container alignItems="center">
        <Grid>
          <label>
            <input type="checkbox" name="" />
            <i></i>
            <div className="text">{habitName}</div>
          </label>
        </Grid>
        <Grid className={style.right}>
          <IconButton edge="end" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <HabitItemMenu
            anchorEl={anchorEl}
            handleClose={handleClose}
            handleDelete={handleDelete}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default HabitItem;
