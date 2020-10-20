import React from "react";
import { History } from "history";
import { Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import "./styles/app.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { paperStyle } from "./styles";
import HabitBody from "./components/main/HabitBody";

interface AppProps {
  history: History;
}

//폰트 적용
const theme = createMuiTheme({
  typography: {},
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
