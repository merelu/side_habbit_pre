import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import SettingsIcon from "@material-ui/icons/Settings";
//import TodayIcon from "@material-ui/icons/Today";
import Grid from "@material-ui/core/Grid";
import AuthDialog from "./auth/AuthDialog";
import { Link } from "react-router-dom";
import { History } from "history";

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
          {/* <Link to="/calendar">
            <IconButton>
              <TodayIcon />
            </IconButton>
          </Link> */}
          <Link to="/add">
            <IconButton>
              <AddIcon />
            </IconButton>
          </Link>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
