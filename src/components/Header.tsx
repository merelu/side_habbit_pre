import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import PaletteIcon from "@material-ui/icons/Palette";
import Grid from "@material-ui/core/Grid";
import AuthDialog from "./auth/AuthDialog";
import { Link } from "react-router-dom";
import { History } from "history";
import AddhabitDialog from "./addHabit/AddhabitDialog";
import { RootState } from "../store/reducers";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    right: {
      marginLeft: "auto",
    },
  })
);

interface HeaderProps {
  history: History;
}
function Header({ history }: HeaderProps) {
  const classes = useStyles();
  const handleBack = () => {
    history.goBack();
  };
  const { loggedIn } = useSelector((state: RootState) => state.loginReducer);
  return (
    <>
      <Grid container alignItems="center">
        <Grid>
          <IconButton onClick={handleBack}>
            <ArrowBackIcon />
          </IconButton>
          <Link to="/">
            <IconButton>
              <HomeIcon />
            </IconButton>
          </Link>
        </Grid>
        <Grid className={classes.right}>
          <AuthDialog />
          {loggedIn && (
            <>
              <AddhabitDialog />
              <IconButton>
                <PaletteIcon />
              </IconButton>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
