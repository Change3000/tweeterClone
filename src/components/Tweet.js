import { useState, useEffect } from 'react';
//import axios from '../utils/axios.js';
import heart from '../assets/heart.svg';
import comment from '../assets/comment.svg';
import upload from '../assets/upload.svg';
import retweet from '../assets/retweet.svg';
import Default from '../assets/default.png';
import '../styles/Tweet.css'; 

function TweetCard({ id, content, date }) {
    const [user, setUser] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [currentUser, setCurrentUser] = useState({ id: null });

    const randomNumber = () => {
        return Math.floor(Math.random() * (10000 - 1500) + 1500);
    }

    const userManager = async () => {
        // Simulating getUser request
        const data = { id: 123, username: 'example', photo: 'photo_url', name: 'Example User', description: 'Description' };
        setUser(data);
        setFollowers([1, 2, 3]); // Sample followers data
        setFollowing([1, 2]); // Sample following data
    }

    useEffect(() => {
        if (user) return;
        userManager();
    }, []);

    const goPage = () => {
        console.log('Navigate to user page:', user.username);
    }
    if (!user) return null;

    return (
        <div className='tweet-card'>
            <div className='user-profile'>
                <div className='profile-image-container'>
                    <img src={user.photo ? user.photo : Default} onClick={goPage} width="54" className="profile-image" alt="" />
                </div>
                <div className='user-info'>
                    <div className='user-name'>
                        <span className='name'>{user.name}</span>
                        <span className='username'>@{user.username}</span>
                    </div>
                    <span className='description'>{user.description}</span>
                    <div className='follower-count'>
                        <span className='following-link'>{following.length} Takip edilen</span>
                        <span className='follower-link'>{followers.length} Takipçi</span>
                    </div>
                </div>
            </div>
            <div className='tweet-content'>
                <div className='user-details'>
                    <div className='username-timestamp'>
                        <span className='name'>{user.name}</span>
                        <span className='username'>@{user.username}</span>
                        <span className='timestamp'>4s</span>
                    </div>
                    <span className='tweet'>{content}</span>
                </div>
                <div className='interactions'>
                    <div className='interaction'>
                        <img src={comment} width="20" alt="" />
                        <span className='interaction-count'>{randomNumber()}</span>
                    </div>
                    <div className='interaction'>
                        <img src={retweet} width="20" alt="" />
                        <span className='interaction-count'>{randomNumber()}</span>
                    </div>
                    <div className='interaction'>
                        <img src={heart} width="20" alt="" />
                        <span className='interaction-count'>{randomNumber()}</span>
                    </div>
                    <div className='interaction hidden-md'>
                        <img src={upload} width="20" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TweetCard;
