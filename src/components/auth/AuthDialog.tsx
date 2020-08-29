import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Dialog from "@material-ui/core/Dialog";
import Login from "./Login";
import Register from "./Register";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import { logout } from "../../store/actions/auth.actions";

function AuthDialog() {
  const [open, setOpen] = useState(false);
  //mode - true: login / false: register
  const [mode, setMode] = useState(true);
  const loggedIn = useSelector(
    (state: RootState) => state.loginReducer.loggedIn
  );
  const dispatch = useDispatch();

  console.log(localStorage.getItem("user"));
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
  console.log(loggedIn);
  return (
    <>
      {loggedIn ? (
        <IconButton
          color="primary"
          onClick={() => {
            dispatch(logout());
          }}
        >
          <ExitToAppIcon />
        </IconButton>
      ) : (
        <IconButton color="primary" onClick={toggleOpen}>
          <AccountCircle />
        </IconButton>
      )}

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
