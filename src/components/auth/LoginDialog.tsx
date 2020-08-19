import React, { useState, useDebugValue } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

function LoginDialog() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const loggingIn = useSelector(
    (state: RootState) => state.loginReducer.loggingIn
  );
  const dispatch = 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [id]: value }));
  };
  const handleSubmit = () => {};

  return (
    <>
      <IconButton color="primary" onClick={handleClickOpen}>
        <AccountCircle />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Signin-dialog-title"
      >
        <DialogTitle id="Signin-dialog-title">Sign In</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="username"
            type="name"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Login
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LoginDialog;
