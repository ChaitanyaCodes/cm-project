import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/dashboard.css';


export default function Dashboard() {
  return (
    <div class="menu">
      <div class="item">
        <span class="fas fa-tachometer-alt"></span>
        <p>Dashboard</p>
      </div>
      <div class="item">
        <span class="fas fa-user"></span>
        <p>Users</p>
      </div>
      <div class="item">
        <span class="fas fa-sitemap"></span>
        <p>Site</p>
      </div>
      <div class="item">
        <span class="fas fa-dollar-sign"></span>
        <p>Sales</p>
      </div>
      <div class="item">
        <span class="fas fa-envelope"></span>
        <p>Emails</p>
      </div>
      <div class="item">
        <span class="fas fa-cogs"></span>
        <p>Settings</p>
      </div>
    </div>
  );
}

