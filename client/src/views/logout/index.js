import LogOutBtn from '../../components/auth/LogOutBtn'
import React from 'react'
import {
    CAlert
} from '@coreui/react'

export default function Logout(props) {
    return (
        <div>
            <CAlert color="info" >
                Are you sure you want to logout?
            </CAlert>
            <LogOutBtn/>
        </div>
    )
}
