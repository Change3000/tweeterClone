import { useState } from 'react';
import { createTweet } from '../api/requests/requests';
import image from '../assets/image.svg';
import gif from '../assets/gif.svg';
import poll from '../assets/poll.svg';
import smile from '../assets/smile.svg';
import event from '../assets/event.svg';
import locationIcon from '../assets/location.svg';
import Default from '../assets/default.png';

import '../styles/NewTweet.css';

function App({ refresh }) {
    const [content, setContent] = useState("");
    // Assuming user data is passed as a prop
    const user = {
        id: 1, // Example user id
        token: 'exampleToken', // Example token
        photo: 'examplePhotoUrl' // Example photo URL
    };

    const tweet = () => {
        if (!content || content.length < 3) return;

        let sendToData = {
            data: {
                user: user.id,
                date: Date.now(),
                content
            },
            token: user.token
        };

        const response = (data) => {
            document.getElementById("content").value = "";
            setContent("");
            if (data === 'OK') return refresh();
        };

        createTweet(sendToData, response);
    };

    let _ = content.length > 0;

    const buttonStyle = {
        backgroundColor: _ ? '#1d9bf0' : '#0E4D77',
        color: _ ? '#fff' : '#7F7F7F',
        cursor: _ ? 'pointer' : 'default'
    };

    return (
        <div className='tweet-form'>
            <img src={user?.photo ? user?.photo : Default} className='profile-image' alt="" />
            <div className='form-content'>
                <input id='content' onInput={e => setContent(e.target.value)} type="text" className='tweet-input' placeholder='Whats Happening?' />
                <div className='button-group'>
                    <div className='icons'>
                        <img src={image} width='25' className='cursor-pointer' />
                        <img src={gif} width='25' className='cursor-pointer' />
                        <img src={poll} width='25' className='cursor-pointer' />
                        <img src={smile} width='25' className='cursor-pointer' />
                        <img src={event} width='25' className='cursor-pointer' />
                        <img src={locationIcon} width='25' className='cursor-pointer' />
                    </div>
                    <div onClick={tweet} style={buttonStyle} className='tweet-button'>
                        <span className='button-text'>Tweet</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
