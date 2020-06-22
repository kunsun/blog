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
      </ul>
    </header>

  )
}

export default Header;