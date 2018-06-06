import React from 'react';

const Sidebar = ({ toggleSidebar, sidebar }) => {
  return (
    <div>
      <div
        className={ sidebar ? 'sidebar sidebar-open' : 'sidebar sidebar-close' }
        onClick={()=>toggleSidebar(!sidebar)}>
        SideBar here
      </div>
    </div>
  );
}

export default Sidebar;
