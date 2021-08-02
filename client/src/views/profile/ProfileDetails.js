import React, {useState, useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';

function ProfileDetails(props) {
  const [email, setEmail] = useState(props.user.email);
  let [disabled, setDisabled] = useState("");

  useEffect(() => {
    setDisabled(true)
  }, [])

  function handleUpdateInit(e) {
    e.preventDefault();
    console.log(e.innerText);
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
        const updateEmail = {
          email
        };
      }
      toast.success("email updated successfully")
    } catch (err) {
      toast.error(err.response.data.errorMessage);
      console.error(err.response.data.errorMessage);
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
          <button
            type="submit"
            className="btn button btn-primary"
            style={{ maxWidth: "6rem", marginRight: "1rem" }}
            onClick={handleUpdate}
          >
            Save
          </button>
          <button
            id="updateInit"
            type="button"
            className="btn button btn-primary"
            style={{ maxWidth: "6rem", marginRight: "1rem" }}
            onClick={handleUpdateInit}
          >
            Edit
          </button>
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

{
  /* <CCardBody>
              <CForm action="" method="post">
                <CFormGroup>
                  <CLabel htmlFor="nf-email">Email</CLabel>
                  <CInput type="email" id="nf-email" name="nf-email" placeholder="Enter Email.." autoComplete="email"/>
                  <CFormText className="help-block">Please enter your email</CFormText>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-password">Password</CLabel>
                  <CInput type="password" id="nf-password" name="nf-password" placeholder="Enter Password.." autoComplete="current-password"/>
                  <CFormText className="help-block">Please enter your password</CFormText>
                </CFormGroup>
              </CForm>
            </CCardBody> */
}
