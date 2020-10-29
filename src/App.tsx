import React from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import "./styles/app.css";
import "./styles/errorPage.css";
import "./styles/loading.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import HabitBody from "./components/main/HabitBody";
import ErrorPage from "./components/error/ErrorPage";
import { history } from "./configureStore";
import Loading from "./components/error/Loading";

//폰트 적용
const theme = createMuiTheme({
  typography: {},
  palette: {
    primary: {
      dark: "#807F89",
      main: "#99A89E",
      light: "#BBC7BA",
      contrastText: "#D7DBD1",
    },
    secondary: {
      main: "#ECA4A6",
      light: "#F9D5D3",
    },
    success: {
      main: "#807F89",
    },
    error: {
      main: "#ECA4A6",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={HabitBody} />
          <Route
            path="/networkerror"
            render={() => (
              <ErrorPage status="---" description="Network Error" />
            )}
          />
          <Route path="/loading" component={Loading} />
          <Route component={ErrorPage} />
        </Switch>
      </ConnectedRouter>
    </ThemeProvider>
  );
};

export default App;
