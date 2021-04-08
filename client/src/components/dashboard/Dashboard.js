import React, { useContext, useEffect} from 'react';
import { Redirect , Switch} from 'react-router-dom';
import '../../css/dashboard.css';
import AuthContext from "../../context/AuthContext";
import LogOutBtn from '../auth/Loggout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Dashboard() {
  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    toast.success('successfully logged in')
  }, []);

  return (
    <div>
      {loggedIn === false && (
      <Switch>
        <Redirect exact from="/dashboard" to="/" />
      </Switch>
    )}
    {loggedIn === true && (
      <>
      <div className="menu">
      <div className="item">
        <p>Dashboard</p>
      </div>
      <hr/>
      <div className="item">
        <span className="fas fa-tachometer-alt"></span>
        <p>AICTE</p>
      </div>
      <div className="item">
        <span className="fas fa-user"></span>
        <p>STUDENTS</p>
      </div>
      <div className="item">
        <span className="fas fa-chalkboard-teacher"></span>
        <p>TEACHERS</p>
      </div>
      <div className="item">
        <span className="fas fa-sign-out-alt"></span>
        <p><LogOutBtn/></p>
      </div>
    </div>
      </>
    )}
    <ToastContainer/>
    </div>
    
    
  );
}

