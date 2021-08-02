import axios from "axios";
import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../../css/login.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
            "/auth/login",
            loginData
          );            // .catch(console.log("access denied to wrong"))
          await getLoggedIn();
          history.push("/dashboard")
        } catch (err) {
          toast.error(err.response.data.errorMessage);
          console.error(err.response.data.errorMessage);
        }
      }

    return (
    <div className="bg-img">
        <form className="form" onSubmit={login}> 
            <div className="container">
                <h2 className="s-my text-dark">Sign In</h2>
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
                <Link to="/signup">Sign Up</Link>
                
                <p>Copyright <span>&copy;</span> 2021</p>
            </div>
        </form>
        <ToastContainer />
    </div>  
    );
}