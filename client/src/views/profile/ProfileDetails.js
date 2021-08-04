import React, {useState, useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function ProfileDetails(props) {
  const [email, setEmail] = useState("");
  let [disabled, setDisabled] = useState("");


  useEffect(() => {
    setEmail(props.user.email);
    setDisabled(true)
  },[props.user.email])

  function handleUpdateInit(e) {
    e.preventDefault();

    try {
      setDisabled(false);
    } catch (err) {
      toast.error(err.response.data.errorMessage);
      console.error(err.response.data.errorMessage);
    }
  }

  function handleCancel(e) {
    e.preventDefault();

    try {
      setEmail(props.user.email);
      setDisabled(true)
    } catch (err) {
      toast.error(err.response.data.errorMessage);
      console.error(err.response.data.errorMessage);
    }
  }

  function validateEmail() 
  {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
        return 1
      }
        toast.error("You have entered an invalid email address!");
        return 0
  }

  async function handleUpdate(e) {
    e.preventDefault();
    try {

      if(validateEmail()){
        var updateEmailData = {
          "email" : email
        };
      }

      await axios.patch('/auth/update-mail/' + props.user.id, updateEmailData)
      .then((res) => {

        console.log(res);
        console.log('email successfully updated');

      }).catch((error) => {
        console.log(error)
      })

      toast.success("email updated successfully")

    } catch (err) {
      console.log(err); 
    }
  }



  return (
    <div>
      <form >

        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label" style={{textAlign: "left"}}>
            Full name:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={props.user.fullName}
            disabled
          ></input>
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label" style={{textAlign: "left"}}>
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputText"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={disabled}
          ></input>
        </div>

        <div className="mb-3">
          {disabled? 
            null :
            <button
            type="submit"
            className="btn button btn-primary"
            style={{ maxWidth: "6rem", marginRight: "1rem" }}
            onClick={handleUpdate}
            >
            Save
            </button>
          }

          {
            disabled ? <button
            id="updateInit"
            type="button"
            className="btn button btn-primary"
            style={{ maxWidth: "6rem", marginRight: "1rem" }}
            onClick={handleUpdateInit}
          >
            Edit
          </button> : null
          }

          {disabled ? null : <button
            id="cancel"
            type="button"
            className="btn button btn-primary"
            style={{ maxWidth: "6rem" }}
            onClick={handleCancel}
          >
            cancel
          </button>}

        </div>
        
      </form>
      <ToastContainer/>
    </div>
  );
}

export default ProfileDetails;
