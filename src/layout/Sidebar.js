import React from 'react';

const Sidebar = () => {
  return (
    <aside style={{ width: '250px', background: '#f4f4f4', padding: '20px' }}>
      <h3>Admin Menu</h3>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
