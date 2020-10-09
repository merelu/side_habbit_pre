import React from "react";
import Header from "./components/header/Header";
import { History } from "history";
import { Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import AddHabit from "./components/addHabit/AddHabit";
import HabitMain from "./components/main/HabitMain";
import "./styles/app.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

interface AppProps {
  history: History;
}

const theme = createMuiTheme({
  typography: {
  },
});

const App = ({ history }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Route path="/" component={Header} />
        <Route path="/" component={HabitMain} exact />
        <Route path="/add" component={AddHabit} />
      </ConnectedRouter>
    </ThemeProvider>
  );
};

export default App;
