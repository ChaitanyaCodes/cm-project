import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/auth/login";
import SignUp from './components/auth/SignUp';
import ActivateAccount from './components/auth/ActivateAccount';
import WaitingPage from './components/auth/WaitingPage';
import AuthContext from "./context/AuthContext";
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/auth/activate/:token/:name" component={ActivateAccount}/>
          <Route exact path="/auth/waiting" component={WaitingPage}/>
          {loggedIn === false && (
            <>
              <Route exact path="/" component={Login}/>
              <Route path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
            </>
          )}
          {loggedIn? (
            <>
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </>
          ): <Redirect to="/login" />}
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default Router;