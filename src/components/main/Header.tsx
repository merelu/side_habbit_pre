import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import PaletteIcon from "@material-ui/icons/Palette";
import AuthDialog from "../auth/AuthDialog";
import { Link } from "react-router-dom";
import AddhabitDialog from "../addHabit/AddhabitDialog";
import { RootState } from "../../store/reducers";
import { useSelector } from "react-redux";
import { appBarStyle } from "../../styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { History } from "history";

interface HeaderProps {
  history: History;
}
function Header({ history }: HeaderProps) {
  const style = appBarStyle();
  const handleBack = () => {
    history.goBack();
  };
  const { loggedIn } = useSelector((state: RootState) => state.authReducer);
  return (
    <div className={style.root}>
      <AppBar position="static">
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
              <IconButton>
                <PaletteIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
