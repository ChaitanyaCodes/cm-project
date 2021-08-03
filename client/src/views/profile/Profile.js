import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ProfileDetails from './ProfileDetails';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const useremail = cookies.get('useremail');

function Profile() {
    const [userId, setUserId] = useState(useremail);
    const [user, setUser] = useState({
        _id: "",
        fullName: "",
        role: "",
        email: ""
    })

    useEffect(() => {
        getUserDetails();
    },[userId])


    async function getUserDetails(){
        const profileData = await axios("/auth/profile-details/" + userId);
        setUser(profileData.data.userProfile);
    };

    return (
        <div>
            <ProfileDetails user={user}/>
        </div>
    )
}

export default Profile


