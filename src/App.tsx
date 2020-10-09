import React from "react";
import Header from "./components/header/Header";
import { History } from "history";
import { Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import AddHabit from "./components/addHabit/AddHabit";
import HabitMain from "./components/main/HabitMain";
import { createMuiTheme, ThemeProvider, Typography } from "@material-ui/core";
import "./styles/app.css";

interface AppProps {
  history: History;
}

const theme = createMuiTheme({
  typography: {
    fontFamily: "Nanum Pen Script",
  },
});
theme.typography.h3 = {
  fontSize: "1.2rem",
};
const App = ({ history }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Typography variant="h3">sdfsdf</Typography>
        {/* <Route path="/" component={Header} />
        <Route path="/" component={HabitMain} exact />
        <Route path="/add" component={AddHabit} /> */}
      </ConnectedRouter>
    </ThemeProvider>
  );
};

export default App;
