import React from "react";
import Header from "./components/Header";
// import Main from "./components/Main";
// import UserMain from "./components/UserMain";
import { History } from "history";
import { Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Generate_Calendar from "./components/Generate_Calendar";
import AddHabit from "./components/addHabit/AddHabit";
// import routes from "./router";
interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ConnectedRouter history={history}>
        <Route path="/" component={Header} />
        <Route path="/calendar" component={Generate_Calendar} />
        <Route path="/add" component={AddHabit} />
      </ConnectedRouter>
    </MuiPickersUtilsProvider>
  );
};

export default App;
