import React from 'react';
import Login from './components/auth/login.js';
import SignUp from './components/auth/SignUp.js';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
