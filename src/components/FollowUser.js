import { useEffect, useState } from "react";
import Default from '../assets/default.png';
//import axios from "../utils/axios";
import FollowButton from './FollowButton';
//import { getUser } from '../api/requests/requests';
import '../styles/App.css';

function App({ id }) {
    const [user, setUser] = useState(null);
    const [currentUser, setCurrentUser] = useState({ id: null });

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUser({ id });
            setUser(data);
            // Simulating setting currentUser data
            setCurrentUser({ id: 123 }); // Replace with actual current user data
        };
        fetchUser();
    }, [id]);

    if (!user) return null;

    return (
        <div className='app-container'>
            <img src={user.photo ?? Default} onClick={() => console.log(`Navigate to /${user.username}`)} className="profile-image" alt="" />
            <div className='user-info'>
                <span onClick={() => console.log(`Navigate to /${user.username}`)} className='user-name'>{user.name}</span>
                <span className='user-username'>@{user.username}</span>
                <span className='user-description'>{user.description}</span>
            </div>
            {currentUser.id !== user.id && (
                <FollowButton user={user} active={user} />
            )}
        </div>
    );
}

export default App;
