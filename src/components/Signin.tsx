import React, { FC, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputIcon from "@material-ui/icons/Input";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Signin: FC = () => {
  const [open, setOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const checkPersonal = () => {
    if (userEmail === "gyuha" && password === "1234") {
      alert("Good");
    } else {
      alert("fail");
    }
    handleClose();
  };

  return (
    <div>
      <IconButton color="primary" onClick={handleClickOpen}>
        <Signin />
        <InputIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Signin-dialog-title"
      >
        <DialogTitle id="Signin-dialog-title">Sign In</DialogTitle>
        <DialogContent>
          <DialogContentText>Email</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Email Address"
            type="email"
            fullWidth
            onChange={handleEmailChange}
          />
          <DialogContentText>Password</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={handlePasswordChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={checkPersonal} color="primary">
            Login
          </Button>
          <Button onClick={handleClose} color="primary">
            Sign up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Signin;
