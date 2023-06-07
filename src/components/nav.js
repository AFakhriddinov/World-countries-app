import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import back from '../images/back.png';
import mic from '../images/mic.png';
import setting from '../images/setting.png';
import '../index.css';

const Nav = () => (
  <>
    <div className="nav">
      <Link to="/">
        <img src={back} alt="back" />
      </Link>
      <h1>World Countries</h1>
      <div>
        <img src={mic} alt="mic" />
        <img src={setting} alt="setting" />
      </div>
    </div>
    <Outlet />
  </>
);

export default Nav;
