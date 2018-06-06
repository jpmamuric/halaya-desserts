import React from 'react';

const Header = ({ toggleSidebar, sidebar }) => (
  <div className="header">
      <div className="logo">Welcome</div>
      <div className="header__menu" onClick={()=>toggleSidebar(!sidebar)}>
        <div className='header__menu-logo' />
        <span>Menu</span>
      </div>
  </div>
)

export default Header;
