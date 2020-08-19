import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import SettingsIcon from "@material-ui/icons/Settings";
import TodayIcon from "@material-ui/icons/Today";
import Grid from "@material-ui/core/Grid";
import LoginDialog from "./auth/LoginDialog";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    right: {
      marginLeft: "auto",
    },
  })
);

function Header() {
  const classes = useStyles();
  return (
    <>
      <Grid container alignItems="center">
        <Grid>
          <Link to="/home">
            <Button color="primary">Habit</Button>
          </Link>
        </Grid>
        <Grid className={classes.right}>
          <Link to="/login">
            <LoginDialog />
          </Link>
          {/* 다이얼로그를 링크써서 해야되나?????? */}
          <Link to="/calendar">
            <IconButton color="primary">
              <TodayIcon />
            </IconButton>
          </Link>
          <IconButton color="primary">
            <AddIcon />
          </IconButton>
          <IconButton color="primary">
            <SettingsIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
