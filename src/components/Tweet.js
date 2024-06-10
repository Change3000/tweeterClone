import React, { useEffect, useState } from 'react';
import heart from '../assets/heart.svg';
import comment from '../assets/comment.svg';
import upload from '../assets/upload.svg';
import retweet from '../assets/retweet.svg';
import Default from '../assets/default.png';
import FollowButton from './FollowButton';

function App({ id, content, date }) {
    const [user, setUser] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);

    const randomNumber = () => {
        return Math.floor(Math.random() * (10000 - 1500) + 1500);
    };

    const fetchUserData = async () => {
        // Simulating fetching user data from the API
        const userData = {
            id: 123,
            name: 'John Doe',
            username: 'johndoe',
            photo: Default,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            followers: [1, 2, 3],
            following: [4, 5, 6]
        };
        setUser(userData);
        setFollowers(userData.followers);
        setFollowing(userData.following);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const goPage = () => {
        console.log('Navigating...');
    };

    if (!user) return null;

    return (
        <div className='md:!w-[590px] w-full flex items-start justify-center relative px-4 border-b border-b-gray-500 border-opacity-50 pt-5 gap-3 cursor-pointer transition-all hover:bg-[#080808]'>
            <div className='group w-max relative transition-all'>
                <div className='w-[268px] invisible userBoxX transition-all opacity-0 group-hover:opacity-100 z-50 group-hover:delay-500 group-hover:visible flex absolute p-4 top-12 bg-black rounded-3xl flex-col items-start'>
                    <div className='flex items-center justify-between w-full'>
                        <img src={user?.photo ? user?.photo : Default} onClick={goPage} width='54' className='rounded-full cursor-pointer' alt='' />
                        <FollowButton user={user} active={true} setFollowers={setFollowers} setFollowing={setFollowing} />
                    </div>

                    <div className='flex flex-col items-start justify-start w-full'>
                        <a onClick={goPage} className='font-semibold cursor-pointer hover:underline text-lg mt-1'>{user?.name}</a>
                        <span className='text-[#54595D]'>@{user.username}</span>
                    </div>

                    <span>{user.description}</span>

                    <div className='flex items-start gap-2 w-full justify-start'>
                        <span className='text-sm hover:underline cursor-pointer'>
                            <strong>{following?.length}</strong>
                            <span className='text-[#71767B]'>Following</span>
                        </span>
                        <span className='text-sm hover:underline cursor-pointer'>
                            <strong>{followers?.length}</strong>
                            <span className='text-[#71767B]'>Followers</span>
                        </span>
                    </div>
                </div>
                <img src={user?.photo ?? Default} onClick={goPage} width='54' className='rounded-full cursor-pointer' alt='' />
            </div>
            <div className='w-full flex flex-col items-start justify-center pb-3'>
                <div className='flex items-center justify-center gap-1'>
                    <a onClick={goPage} className='font-semibold cursor-pointer hover:underline'>{user?.name}</a>
                    <span className='text-[#54595D]'>@{user?.username}</span>
                    <span className='text-[#54595D]'>4s</span>
                </div>
                <span>{content}</span>
                <div className='flex w-full gap-16 mt-4'>
                    <div className='flex items-start justify-center gap-3 group cursor-pointer'>
                        <img src={comment} width='20' alt='' />
                        <span className='text-[#54595D] text-sm !w-9 !max-w-[2.25rem] overflow-hidden transition-all group-hover:text-[#1D9BF0]'>{randomNumber()}</span>
                    </div>
                    <div className='flex items-start justify-center gap-3 group cursor-pointer'>
                        <img src={retweet} width='20' alt='' />
                        <span className='text-[#54595D] text-sm !w-9 !max-w-[2.25rem] overflow-hidden transition-all group-hover:text-[#00BA7C]'>{randomNumber()}</span>
                    </div>
                    <div className='flex items-center justify-center gap-3 group cursor-pointer'>
                        <img src={heart} width='20' className='' alt='' />
                        <span className='text-[#54595D] text-sm !w-9 !max-w-[2.25rem] overflow-hidden transition-all group-hover:text-[#DE1673]'>{randomNumber()}</span>
                    </div>
                    <div className='hidden md:flex items-start justify-center gap-3 group'>
                        <img src={upload} width='20' alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
