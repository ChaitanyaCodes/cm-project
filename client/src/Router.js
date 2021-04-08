import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/login";
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard'
import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
          <Login/>
        </Route>
        
        {loggedIn === false && (
          <>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;