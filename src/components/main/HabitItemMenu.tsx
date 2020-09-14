import { Menu, MenuItem } from "@material-ui/core";
import React from "react";

type HabitItemMenuProps = {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
};
function HabitItemMenu({ anchorEl, handleClose }: HabitItemMenuProps) {
  return (
    <>
      <Menu
        id="habitItem-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Check</MenuItem>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </>
  );
}

export default HabitItemMenu;
