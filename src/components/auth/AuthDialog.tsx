import React, { useState, useEffect, useCallback } from "react";
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

  const dialogOpen = () => {
    setOpen(true);
    changeLoginMode();
  };
  const dialogClose = () => {
    setOpen(false);
  };
  const changeLoginMode = () => {
    setMode(true);
  };
  const changeRegiseterMode = () => {
    setMode(false);
  };
  return (
    <>
      {loggedIn ? (
        <IconButton
          color="primary"
          onClick={() => {
            dispatch(logout());
            alert("로그아웃");
          }}
        >
          <ExitToAppIcon />
        </IconButton>
      ) : (
        <IconButton color="primary" onClick={dialogOpen}>
          <AccountCircle />
        </IconButton>
      )}

      <Dialog open={open} onClose={dialogClose} aria-labelledby="Login-dialog">
        {mode ? (
          <Login
            dialogClose={dialogClose}
            changeRegisterMode={changeRegiseterMode}
          />
        ) : (
          <Register
            dialogClose={dialogClose}
            changeLoginMode={changeLoginMode}
          />
        )}
      </Dialog>
    </>
  );
}

export default AuthDialog;
