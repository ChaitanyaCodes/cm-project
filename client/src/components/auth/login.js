import React, { Fragment, useState } from 'react';
import '../../css/login.css';

export default function Login(){
    return (
    <div className="bg-img">
        <form className="form"> 
            <div className="container">
                <h2>sign in</h2>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    required
                    autofocus
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                />
                
                <button type="submit">Sign in</button>
                <p>Copyright <span>&copy;</span> 2021</p>
            </div>
        </form>
    </div>  
    );
}