import React, { useEffect, useState } from 'react';
import Default from '../assets/default.png';
import back from '../assets/back.svg';


import Tweet from '../components/Tweet';
import Hashtags from '../components/suggestions/Hashtags.js';
import SearchComp from '../components/suggestions/Search.js';
import UsersBox from '../components/suggestions/UsersBox.js';
import EditProfile from '../components/EditProfile.js';
import FollowButton from '../components/FollowButton.js';

function App({ currentUser, username }) {
    const [user, setUser] = useState(null);
    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [selfMode, setSelfMode] = useState(false);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);

    function EditComponent({ active, setEditMode }) {
        if (active) return <EditProfile setEditMode={setEditMode} />;
        return null;
    }

    function UserBanner({ banner }) {
        if (banner) {
            return <img src={banner} className="object-cover h-full w-full" alt="" />;
        } else {
            return <div></div>;
        }
    }

    function EditButton({ active }) {
        if (active) {
            return (
                <button
                    onClick={() => setEditMode(true)}
                    className='w-[134px] rounded-3xl h-8 flex items-center justify-center border-2 border-[#323C44] transition-all hover:bg-[#181919] self-start'
                >
                    <span>Edit Profile</span>
                </button>
            );
        }
        return null;
    }

    const userManager = async () => {
        try {
            // Simulating API calls with setTimeout
            setTimeout(() => {
                setUser({ name: "John Doe", username: "johndoe", description: "Lorem ipsum dolor sit amet", followers: [], following: [], banner: null });
                setTweets([{ user: 1, content: "Lorem ipsum dolor sit amet", date: "2022-06-01" }]);
                setFollowers([]);
                setFollowing([]);
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (username === currentUser.username) {
            setSelfMode(true);
            setUser(currentUser);
            setTweets([{ user: 1, content: "Lorem ipsum dolor sit amet", date: "2022-06-01" }]);
            setFollowers(currentUser.followers);
            setFollowing(currentUser.following);
            return;
        }

        if (user) return;
        setLoading(true);
        userManager();

    }, [username, currentUser, user]);

    return (
        <main className='w-full flex items-start'>
            {/* Your JSX content */}
        </main>
    );
}

export default App;
