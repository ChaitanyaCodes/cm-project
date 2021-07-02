import React, {Fragment} from 'react';
import WaitingIcon from '../../assets/imgs/waitingIcon.svg';
import {
    CContainer,
    CRow,
    CCol
} from '@coreui/react';

function WaitingPage() {
    return (
        <Fragment>
            <CContainer className="mt-4 px-4 bg-gradient-secondary">
                <CRow className="mt-2">
                    
                    <CCol className="align-self-center ">
                        <h2 style={{fontWeight: 'bold'}} className="bold">Account  Activation  Request  Sent</h2>
                        <div className="p-3 border bg-light rounded bg-gradient-secondary">
                            <img src={WaitingIcon} alt="waiting Icon" height={200} width={500}/>
                        </div>
                        <br/>
                        <br/>
                        <p className="mt-2 text-info">Request to create your account has been initiated.</p>
                        <p>Please contact Admin to get your account activated.</p>
                        <a style={{marginLeft:'250px'}} className="mt-2 text-info" href="https://edumanagement.herokuapp.com/login">Login</a>

                    </CCol>
                </CRow>
            </CContainer>
        </Fragment>
    )
}

export default WaitingPage
