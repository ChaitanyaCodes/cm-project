import React, { useState, useEffect} from 'react';
import ProfileDetails from './ProfileDetails';

function Profile() {
    const user = {
        _id: "60d2b863d6a1aa00157d0581",
        fullName: "Administrator",
        role: 3,
        email: "admin@ems.com"
    }

    return (
        <div>
            <ProfileDetails user={user}/>
        </div>
    )
}

export default Profile
