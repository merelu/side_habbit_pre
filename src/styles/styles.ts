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
    "@media screen and (max-width: 1000px)": {
      flexDirection: "column",
      height: "auto",
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  detail_root: {
    flex: 2,
    transition: "all 1s linear",
    background: theme.palette.primary.light,
  },
  flex: {
    flex: 1,
  },
  list_root: {
    flex: 1,
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
  detail_active: {
    opacity: 0,
    animation: "$opacityDetail 2s ease forwards",
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
  "@keyframes opacityDetail": {
    to: {
      opacity: 1,
    },
  },
  "@keyframes flexShrink": {
    to: {
      flex: 0.00001,
    },
  },
}));

export const calendarStyle = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.primary.contrastText,
    marginTop: "10px",
    width: "100%",
  },
  info: {
    justifyContent: "space-between",
    background: theme.palette.secondary.main,
    height: "80px",
    "& .MuiTypography-root": {
      color: theme.palette.primary.dark,
    },
    "& .MuiButton-root": {
      color: theme.palette.primary.dark,
    },
  },
  dayName_container: {
    height: "50px",
    width: "90%",
    margin: "auto",
  },
  dayName_text: {
    marginTop: "14px",
  },
  dayName_sun: {
    color: "red",
  },
  dayName: {
    width: "calc(100%/7)",
    height: "100%",
  },
  date_container: {
    width: "90%",
    margin: "auto",
    paddingBottom: "50px",
  },
  date_Item: {
    width: "calc(100%/7)",
    height: "60px",
  },
  emptyBox: {
    width: "100%",
    height: "100%",
  },
  item_border: {
    position: "relative",
    width: "50px",
    height: "50px",
    margin: "5px auto",
  },
  item_active: {
    border: "1px solid",
    borderColor: theme.palette.primary.dark,
    borderRadius: "50%",
  },
  item_text: {
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: "1.5em",
    transform: "translate(-50%,-50%)",
  },
}));
