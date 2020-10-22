import React from "react";
import { History } from "history";
import { Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import "./styles/app.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import HabitBody from "./components/main/HabitBody";

interface AppProps {
  history: History;
}

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
  },
});

const App = ({ history }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Route path="/" component={HabitBody} />
      </ConnectedRouter>
    </ThemeProvider>
  );
};

export default App;
