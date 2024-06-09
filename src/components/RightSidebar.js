import React from 'react';
import './RightSidebar.css';

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="search-bar">
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="followers">
        <h3>Followers</h3>
        <div className="follower">
          <div className="follower-avatar"></div>
          <div className="follower-name">John Doe</div>
        </div>
        <div className="follower">
          <div className="follower-avatar"></div>
          <div className="follower-name">Jane Smith</div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
