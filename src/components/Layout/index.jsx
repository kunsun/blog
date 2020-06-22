import React from 'react';
import { Link } from 'gatsby';
import './index.css';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      { children }
    </div>
  )
}

export default Layout;