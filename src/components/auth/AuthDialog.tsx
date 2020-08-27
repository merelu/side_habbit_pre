import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Dialog from "@material-ui/core/Dialog";
import Login from "./Login";
import Register from "./Register";

function AuthDialog() {
  const [open, setOpen] = useState(false);
  //true: login / false: register
  const [mode, setMode] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
    setMode(true);
  };
  const toggleMode = () => {
    setMode(!mode);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <IconButton color="primary" onClick={toggleOpen}>
        <AccountCircle />
      </IconButton>

      <Dialog open={open} onClose={handleClose} aria-labelledby="Login-dialog">
        {mode ? (
          <Login toggleOpen={toggleOpen} toggleMode={toggleMode} />
        ) : (
          <Register toggleOpen={toggleOpen} toggleMode={toggleMode} />
        )}
      </Dialog>
    </>
  );
}

export default AuthDialog;
