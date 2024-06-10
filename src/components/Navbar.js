import React from 'react';
import '../styles/App.css';

import logo from '../assets/logo.png';
import HomeLogo from '../assets/home.svg';
import HashLogo from '../assets/hashtag.svg';
import NotificationLogo from '../assets/notification.svg';
import DMlogo from '../assets/message.svg';
import Bookmark from '../assets/bookmark.svg';
import List from '../assets/dropdown.svg';
import Profile from '../assets/me.jpg';
import More from '../assets/more.svg';
import Default from '../assets/default.png';

function Navbar() {
    const user = {
        token: true, // Simulate user authentication
        username: 'exampleUser',
        name: 'Example User',
        photo: null // Simulate user profile photo
    };

    const location = window.location.pathname;
    const blockRenderPaths = [
        "/login",
        "/register"
    ];

    if (!user.token || blockRenderPaths.includes(location)) return null;

    return (
        <header className='header'>
            <div className="sidebar">
                <img src={logo} width='30' className='logo' alt="" />
                <a href="/home" className="nav-link">
                    <img src={HomeLogo} width="30" alt="" />
                    <span>Home</span>
                </a>
                <a href="#" className="nav-link">
                    <img src={HashLogo} width="30" alt="" />
                    <span>Explore</span>
                </a>
                <a href="#" className="nav-link">
                    <img src={NotificationLogo} width="30" alt="" />
                    <span>Notification</span>
                </a>
                <a href="#" className="nav-link">
                    <img src={DMlogo} width="30" alt="" />
                    <span>Message</span>
                </a>
                <a href="#" className="nav-link">
                    <img src={Bookmark} width="30" alt="" />
                    <span>Bookmarks</span>
                </a>
                
                <a href={`/${user.username}`} className="nav-link">
                    <img src={Profile} width="30" alt="" />
                    <span>Profile</span>
                </a>
                <a href="#" className="nav-link">
                    <img src={More} width="30" alt="" />
                    <span>More</span>
                </a>
                <a href='#' className='tweet-button'>
                    <span>Tweet</span>
                </a>
                <div className='user-info'>
                    <img src={user.photo ? user.photo : Default} width="40" className='user-avatar' alt="" />
                    <div className='user-details'>
                        <span className='user-name'>{user.name}</span>
                        <span className='user-username'>@{user.username}</span>
                    </div>
                    <img src={More} width="20" className='more-icon' alt="" />
                </div>
            </div>
        </header>
    );
}

export default Navbar;
