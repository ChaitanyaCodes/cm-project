import React from 'react';
import {
    useParams
} from "react-router-dom";
import axios from "axios";
import {
    CButton,
    CContainer,
    CRow,
    CCol
} from '@coreui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import activationIcon from '../../assets/imgs/activationIcon.svg'

function ActivateAccount() {
    let { token, name } = useParams();

    async function activate(){
        const activationData = {
            token
        }
        try {
            const res = await axios.post(
                "/activate/acc",
                activationData
            );
            console.log(res);
            toast.success(res.data.errorMessage);
        } catch (error) {
            console.log(error.response.data.errorMessage);
            toast.error(error.response.data.errorMessage)
        }
    }
    return (
        <>
            <CContainer className="mt-4 px-4 bg-gradient-warning">
                <CRow className="mt-2">
                    
                    <CCol className="align-self-center ">
                        <h2>ACCOUNT ACTIVATION</h2>
                        <div className="p-3 border bg-light rounded bg-gradient-secondary">
                            <img src={activationIcon} alt="Activation Icon" height={200} width={500}/>
                        </div>
                        <br/>
                        <CButton style={{marginLeft:'200px'}} color="success" onClick={activate}>Activate Account</CButton>
                        <br/>
                        <p className="mt-2 text-info">Click on the 'Activate Account' button to activate {name}'s Account.</p>
                    </CCol>
                </CRow>
            </CContainer>
            
            <ToastContainer />
        </>
    )
}

export default ActivateAccount

// height={80}
