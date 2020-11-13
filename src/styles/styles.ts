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
    flexGrow: 1,
    background: theme.palette.primary.dark,
  },
  left: {
    flexGrow: 1,
  },
}));

export const habitBodyStyle = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    flex: 2,
    transition: "all 1s linear",
    background: "#000",
  },
  flex: {
    flex: 1,
  },
  list_root: {
    flex: 1,
    padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
    background: theme.palette.primary.light,
  },
  list_item: {
    height: theme.spacing(9),
    background: theme.palette.primary.contrastText,
  },
  list_avatar: {
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
  active: {
    flex: 0.00001,
    animation: "$flexGrow 1s ease forwards",
  },
  detailActive: {
    flex: 0.00001,
    animation: "$flexGrowDetail 1s ease forwards",
  },
  disable: {
    flex: 1,
    animation: "$flexShrink 1s ease forwards",
  },
  "@keyframes flexGrow": {
    to: {
      flex: 1,
    },
  },
  "@keyframes flexGrowDetail": {
    to: {
      flex: 2,
    },
  },
  "@keyframes flexShrink": {
    to: {
      flex: 0.00001,
    },
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
    height: "70px",
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
