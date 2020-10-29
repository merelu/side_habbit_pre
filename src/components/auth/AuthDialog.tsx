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
import { clear } from "../../store/actions";
import Loading from "../error/Loading";
import { DialogContent } from "@material-ui/core";

function AuthDialog() {
  const [open, setOpen] = useState(false);
  //mode - true: login / false: register
  const [mode, setMode] = useState(true);
  const { loggedIn, loggingIn } = useSelector(
    (state: RootState) => state.authReducer
  );
  const { loading } = useSelector((state: RootState) => state.registerReducer);
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
    dispatch(clear());
  };

  return (
    <>
      {loggedIn ? (
        <IconButton
          onClick={() => {
            dispatch(logout());
          }}
        >
          <ExitToAppIcon />
        </IconButton>
      ) : (
        <IconButton onClick={dialogOpen}>
          <AccountCircle />
        </IconButton>
      )}

      <Dialog
        open={open}
        onClose={dialogClose}
        aria-labelledby="Login-dialog"
        disableBackdropClick={true}
        PaperProps={
          loggingIn || loading
            ? {
                style: {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                },
              }
            : {}
        }
      >
        {loggingIn || loading ? (
          <Loading />
        ) : mode ? (
          <Login
            dialogClose={dialogClose}
            changeRegisterMode={changeRegiseterMode}
          />
        ) : (
          <Register changeLoginMode={changeLoginMode} />
        )}
      </Dialog>
    </>
  );
}

export default AuthDialog;
