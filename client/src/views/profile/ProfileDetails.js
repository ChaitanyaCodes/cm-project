import React from 'react';
import {
    CCardBody,
    CForm,
    CFormGroup,
    CLabel,
    CInput,
    CFormText
} from '@coreui/react';

function ProfileDetails(props) {

    console.log(props.user._id);
    return (
        <div>
            {props.user._id}
            <CCardBody>
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
            </CCardBody>
        </div>
    )
}

export default ProfileDetails
