import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import PaletteIcon from "@material-ui/icons/Palette";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AuthDialog from "../auth/AuthDialog";
import { Link } from "react-router-dom";
import AddhabitDialog from "../addHabit/AddhabitDialog";
import { RootState } from "../../store/reducers";
import { useDispatch, useSelector } from "react-redux";
import { appBarStyle } from "../../styles";
import { AppBar, Snackbar, Toolbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { history } from "../../configureStore";
import { clear } from "../../store/actions";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface HeaderProps {}

function Header() {
  const style = appBarStyle();
  const { sbOpen, message, alert_type } = useSelector(
    (state: RootState) => state.alertReducer
  );
  const { loggedIn } = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();
  const handleBack = () => {
    history.goBack();
  };
  const handleClose = () => {
    dispatch(clear());
  };

  return (
    <>
      <AppBar className={style.root}>
        <Toolbar>
          <div className={style.left}>
            <IconButton onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
            <Link to="/">
              <IconButton>
                <HomeIcon />
              </IconButton>
            </Link>
          </div>

          <AuthDialog />
          {loggedIn && (
            <>
              <AddhabitDialog />
              <Link to="/list">
                <IconButton>
                  <ListAltIcon />
                </IconButton>
              </Link>
              <IconButton>
                <PaletteIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Snackbar open={sbOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert_type}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Header;
