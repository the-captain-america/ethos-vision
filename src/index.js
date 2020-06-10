import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useWindowSize from "./hooks/useWindowSize";
// Pages
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Clients from "./pages/Clients";
import Programs from "./pages/Programs";
import Client from "./pages/Client";
import Settings from "./pages/Settings";
import Process from "./pages/Process";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
// Features
import DashboardWrapper from "./features/Dashboard";

import { Background } from "./common/Components";
import "./styles.scss";

const Main = ({ children }) => {
  const { height } = useWindowSize();
  return <Background style={{ height }}>{children}</Background>;
};

const App = () => (
  <Router>
    <Main>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/process" component={Process} />
        <Route path="/signup" component={SignUp} />
        <Route
          path="/dashboard"
          render={({ match: { url }, ...props }) => (
            <DashboardWrapper>
              <Route path={`${url}`} component={Dashboard} exact {...props} />
              <Route
                path={`${url}/welcome`}
                component={Welcome}
                exact
                {...props}
              />
              <Route
                path={`${url}/clients`}
                component={Clients}
                exact
                {...props}
              />
              <Route
                path={`${url}/settings`}
                component={Settings}
                exact
                {...props}
              />
              <Route
                path={`${url}/clients/:id`}
                component={Client}
                exact
                {...props}
              />
              <Route path={`${url}/programs`} component={Programs} {...props} />
            </DashboardWrapper>
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </Main>
  </Router>
);

render(<App />, document.getElementById("root"));
