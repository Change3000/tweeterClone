import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-option">Home</div>
      <div className="sidebar-option">Explore</div>
      <div className="sidebar-option">Notifications</div>
      <div className="sidebar-option">Messages</div>
      <div className="sidebar-option">Bookmarks</div>
      <div className="sidebar-option">Lists</div>
      <div className="sidebar-option">Profile</div>
      <div className="sidebar-option">More</div>
    </div>
  );
}

export default Sidebar;