import React from 'react';
import Login from './components/auth/login.js';
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
