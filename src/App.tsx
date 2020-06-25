import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { History } from "history";
import { Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
// import routes from "./router";
interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ConnectedRouter history={history}>
        <Route path="/" component={Header} />
        <Route path="/" component={Main} />
      </ConnectedRouter>
    </MuiPickersUtilsProvider>
  );
};

export default App;
