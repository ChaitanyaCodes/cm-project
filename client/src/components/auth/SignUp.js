import axios from "axios";
import React, { useContext , useState} from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../../css/login.css';
import AuthContext from '../../context/AuthContext.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [key, setKey] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const signUpData = {
        email,
        password,
        confirmPwd,
        key,
        fullName,
        role
      };

      await axios.post(
        "/auth/signup",
        signUpData
      );
      await getLoggedIn();
      history.push("/auth/waiting");
    } catch (err) {
      toast.error(err.response.data.errorMessage)
      console.log(err.response.data.errorMessage);
    }
  }

  const selectHandler = (e) => {
    setRole(e.target.options[e.target.selectedIndex].value)
  }

  return (
    <div className="bg-img">
      <form onSubmit={register}>
      <div className="container">
        <h2 >Sign Up</h2>
        <select  className="s-my" name="role" id="role" onChange={selectHandler}
            value={role}>
            <option value="none" defaultChecked hidden>Select your role</option>
            <option value="1">Student</option>
            <option value="2">Teacher</option>
            <option value="3">Admin</option>
          </select>
            <input className="s-my large"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              placeholder="Enter Full Name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName} className="s-my large"
            />
          
          <div className="pass-container">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password} className="s-my"
            />
            <input
              type="password"
              placeholder="Confirm password"
              onChange={(e) => setConfirmPwd(e.target.value)}
              value={confirmPwd} className="s-my "
            />
          </div>
          {/* key goes here */}
          
          <button type="submit"  className="s-my-btn">Register</button>
          <Link to="/login"><button type="submit" className="s-my-btn">Login</button></Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

// {
//   role == 2 || role == 3 ? 
//   <input
//     type="password"
//     placeholder="Confirm key"
//     onChange={(e) => setKey(e.target.value)}
//     value={key} className="s-my large"
//   /> : null
// }