import axios from "axios";
import React, { useState } from "react";
import '../../css/login.css';
import { Link } from 'react-router-dom';


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  async function register(e) {
    e.preventDefault();

    try {
      const signUpData = {
        email,
        password,
        confirmPwd
      };

      await axios.post(
        "http://localhost:5000/auth/signup",
        signUpData
      );
      // await getLoggedIn();
      // history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="bg-img">
      <form onSubmit={register}>
      <div className="container">
        <h2>SIGN UP</h2>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            placeholder="Enter Full Name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
          <select name="cars" id="cars" onChange={(e) => setRole(e.target.options[e.target.selectedIndex].value)}
            value={role}>
            <option default  disabled>Select your role</option>
            <option value="1">Student</option>
            <option value="2">Teacher</option>
            <option value="3">Admin</option>
          </select>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPwd(e.target.value)}
            value={confirmPwd}
          />

          <button type="submit">Register</button>
          <Link to="/login"><button type="submit">Login</button></Link>
          <p>Copyright <span>&copy;</span> 2021</p>
        </div>
      </form>
    </div>
  );
}

