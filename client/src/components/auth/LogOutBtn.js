import axios from "axios";
import React, { useContext } from "react";
import { useHistory} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {
  CButton
} from '@coreui/react'

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
      "/auth/logout"
    );
    await getLoggedIn();
    history.push("/");
  }

  return <button onClick={logOut} style={styles} ><CButton block color="danger">Logout</CButton></button>;
}