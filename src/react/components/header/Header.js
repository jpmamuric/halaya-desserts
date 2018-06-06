import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar, sidebar }) => (
  <div className="header">
      <Link to='/' className="logo" >Welcome</Link>
      <div className="header__menu" onClick={()=>toggleSidebar(!sidebar)}>
        <div className='header__menu-logo' />
        <span>Menu</span>
      </div>
  </div>
)

export default Header;
