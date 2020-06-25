import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import InputIcon from "@material-ui/icons/Input";
import SettingsIcon from "@material-ui/icons/Settings";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    right: {
      marginLeft: "auto",
    },
  })
);
const Header: FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container alignItems="center">
        <Grid>
          <Button color="primary">Habit</Button>
        </Grid>
        <Grid className={classes.right}>
          <IconButton color="primary">
            <InputIcon />
          </IconButton>
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
};

export default Header;
