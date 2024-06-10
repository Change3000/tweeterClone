import image from '../assets/image.svg';
import gif from '../assets/gif.svg';
import poll from '../assets/poll.svg';
import smile from '../assets/smile.svg';
import event from '../assets/event.svg';
import location from '../assets/location.svg';
import Default from '../assets/default.png';

import { useState } from 'react';

function App() {
    // Simulated user data
    const user = {
        id: 1,
        token: 'dummyToken',
        photo: Default,
        name: 'John Doe',
        username: 'johndoe'
    };

    const [content, setContent] = useState("");
    const [tweets, setTweets] = useState([]);

    const tweet = () => {
        if (!content || content.length < 3) return;

        let newTweet = {
            user: user.id,
            date: Date.now(),
            content
        };

        // Update tweets state with new tweet
        setTweets(prevTweets => [...prevTweets, newTweet]);

        // Clear input field
        setContent("");
    };

    let isContentValid = content.length > 0;

    const buttonStyle = {
        backgroundColor: isContentValid ? '#1d9bf0' : '#0E4D77',
        color: isContentValid ? '#fff' : '#7F7F7F',
        cursor: isContentValid ? 'pointer' : 'default'
    };

    return (
        <div className='w-full flex py-1 justify-between px-4 border-b border-b-gray-500 pb-2 border-opacity-50'>
            <img src={user.photo} className='rounded-full !w-[48px] !h-[48px] pt-1 mr-3' alt="" />
            <div className='pt-1 flex flex-col items-center w-full'>
                <input
                    id='content'
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    type="text"
                    className='w-full outline-none h-[52px] bg-transparent placeholder-gray-600 text-xl'
                    placeholder='Neler oluyor?'
                />
                <div className='flex items-center justify-between w-full'>
                    <div className='flex mt-3 gap-2'>
                        <img src={image} width='25' className='cursor-pointer' alt="Upload" />
                        <img src={gif} width='25' className='cursor-pointer' alt="GIF" />
                        <img src={poll} width='25' className='cursor-pointer' alt="Poll" />
                        <img src={smile} width='25' className='cursor-pointer' alt="Emojis" />
                        <img src={event} width='25' className='cursor-pointer' alt="Event" />
                        <img src={location} width='25' className='cursor-pointer' alt="Location" />
                    </div>
                    <div
                        onClick={tweet}
                        style={buttonStyle}
                        className='w-20 h-[34px] rounded-3xl flex select-none items-center justify-center mt-3'
                    >
                        <span>Tweet</span>
                    </div>
                </div>
            </div>
            {/* Render tweets */}
            <div className="flex flex-col mt-4">
                {tweets.map((tweet, index) => (
                    <div key={index} className="bg-gray-200 p-2 rounded-lg my-1">
                        <p>{tweet.content}</p>
                        <p>{tweet.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
