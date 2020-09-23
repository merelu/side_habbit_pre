import { Menu, MenuItem } from "@material-ui/core";
import React from "react";

type HabitItemMenuProps = {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  handleDelete: () => void;
};
function HabitItemMenu({
  anchorEl,
  handleClose,
  handleDelete,
}: HabitItemMenuProps) {
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
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
}

export default HabitItemMenu;
