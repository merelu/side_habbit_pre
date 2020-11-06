import { makeStyles, Theme } from "@material-ui/core";

export const buttonStyle = makeStyles((theme: Theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));
export const boxStyle = makeStyles((theme: Theme) => ({
  box: {
    background: theme.palette.primary.dark,
    boxSizing: "border-box",
    width: "200px",
    position: "absolute",
    left: "0px",
    textAlign: "center",
    borderRadius: "0 10px 10px 0",
  },
  text: {
    color: theme.palette.primary.contrastText,
    marginBottom: "20px",
    overflow: "visible",
  },
}));

export const appBarStyle = makeStyles((theme: Theme) => ({
  root: {
    position: "absolute",
    flexGrow: 1,
    background: theme.palette.primary.dark,
  },
  left: {
    flexGrow: 1,
  },
}));

export const habitListStyle = makeStyles((theme: Theme) => ({
  root: {
    position: "absolute",
    paddingTop: "70px",
    left: "50%",
    width: "600px",
    height: "100%",
    transform: "translate(-50%,0)",
    padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
    background: theme.palette.primary.light,
    transition: "all 1s",
  },
  selected: {
    left: 0,
    transform: "translateX(0)",
  },
  listItem: {
    height: theme.spacing(9),
    background: theme.palette.primary.contrastText,
  },
  avatar: {
    background: theme.palette.secondary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
    "& img": {
      filter: "invert(100%)",
      width: "80%",
      height: "80%",
    },
  },
}));

export const habitDetailStyle = makeStyles((theme: Theme) => ({
  root: {
    position: "absolute",
    left: "600px",
    paddingTop: "70px",
    height: "100%",
  },
}));

export const calendarStyle = makeStyles((theme: Theme) => ({
  root: {},
  info: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  item: {
    width: "calc(100%/7)",
    height: "50px",
    padding: 0,
  },
  box: {
    width: "100%",
    height: "100%",
  },
  emptyBox: {
    width: "100%",
    height: "100%",
  },
}));
