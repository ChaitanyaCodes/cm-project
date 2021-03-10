import React, { Fragment, useState } from 'react';
import '../../css/login.css';

export default function Login(){
    return (
        <div class="container">
        <h2>sign in</h2>
        <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            autofocus
        />
        <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
        />
        
        <button type="submit">Sign in</button>
        <p>Copyright <span>&copy;</span> 2020</p>
        </div>
    );
}