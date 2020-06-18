import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { History } from "history";
import { Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
// import routes from "./router";
interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" component={Header} />
      <Route path="/calender" component={Main} />
    </ConnectedRouter>
  );
};

export default App;
