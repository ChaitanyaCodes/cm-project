import axios from "axios";
import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../../css/login.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();

    async function login(e) {
        e.preventDefault();
    
        try {
          const loginData = {
            email,
            password
          };
    
          await axios.post(
            "http://localhost:5000/auth/login",
            loginData
          );
          await getLoggedIn();
          history.push("/dashboard");
        } catch (err) {
          console.error(err);
        }
      }

    return (
    <div className="bg-img">
        <form className="form" onSubmit={login}> 
            <div className="container">
                <h2 className="s-my">Sign In</h2>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    required
                    autoFocus
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="s-my large"
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="s-my large"
                />
                <button type="submit" className="s-my-btn">Sign in</button>
                <Link to="/signup"><button type="submit" className="s-my-btn">Sign Up</button></Link>
                
                <p>Copyright <span>&copy;</span> 2021</p>
            </div>
        </form>
    </div>  
    );
}