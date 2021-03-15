import React from 'react';
import { Link } from 'react-router-dom';
import'../../css/dashboard.css';
// const React = require('react');
// const {Link} = require('react-router-dom');
// require('../../css/dashboard.css');


export default function Dashboard() {
  return (
    <div className="menu">
        <div className="item">
            <span className="fas fa-tachometer-alt"></span>
            <p>Dashboard</p>
        </div>
        <div className="item">
            <span className="fas fa-user"></span>
            <p>Users</p>
        </div>
        <div className="item">
            <span className="fas fa-sitemap"></span>
            <p>Site</p>
        </div>
        <div className="item">
            <span className="fas fa-dollar-sign"></span>
            <p>Sales</p>
        </div>
        <div className="item">
            <span className="fas fa-envelope"></span>
            <p>Emails</p>
        </div>
        <div className="item">
            <span className="fas fa-cogs"></span>
            <p>Settings</p>
        </div>
        {/* <div className="item">
            <span className=""></span>
            <Link to="/logout">Logout</Link>
        </div> */}
    </div>
  );
}

