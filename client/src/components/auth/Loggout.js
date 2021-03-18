import axios from "axios";
import React, { useContext } from "react";
import { useHistory} from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  const styles = {
    background: "none",
    border: "none",
    color: "#999898"
  };

  async function logOut() {
    await axios.get(
      "http://localhost:5000/auth/logout"
    );
    await getLoggedIn();
    history.push("/");
  }

  return <button onClick={logOut} style={styles} >Log out</button>;
}