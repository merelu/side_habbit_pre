import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import AddHabit from "./AddHabit";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { addHabitReset } from "../../store/actions";

function AddhabitDialog() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const dialogOpen = () => {
    setOpen(true);
  };
  const dialogClose = () => {
    setOpen(false);
    dispatch(addHabitReset());
  };
  return (
    <>
      <IconButton onClick={dialogOpen}>
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={dialogClose} aria-labelledby="Login-dialog">
        <AddHabit dialogClose={dialogClose} />
      </Dialog>
    </>
  );
}

export default AddhabitDialog;
