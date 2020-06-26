import React from 'react';
import Logo from './logo.png';
import './index.css';

const Header = () => {
  return (
    <header className='page-header'>
      <img src={Logo} alt="kunsun"/>
      <ul className="nav-list">
        <li className="nav-list-item">
          <a href="/">BLOG</a>
        </li>
        <div className="nav-list-item">
          <a href="/archive">ARCHIVE</a>
        </div>
        <div className="nav-list-item">
          <a href="/resume">RESUME</a>
        </div>
        <div className="nav-list-item">
          <a href="/github">GITHUB</a>
        </div>
      </ul>
    </header>

  )
}

export default Header;