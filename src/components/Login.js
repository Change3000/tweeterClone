import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';
import Google from '../assets/google.png';
import Apple from '../assets/apple.svg';

function App() {
    const [next, setNext] = useState(false);
    const [username, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (user && user.token) {
            // Simulate navigation to home page
            console.log("Navigate to /home");
        }
    }, [user]);

    const auth = () => {
        if (loading) return;
        if (!username || !password) return;

        setLoading(true);

        // Simulate a login request
        setTimeout(() => {
            const fakeUser = {
                username,
                token: 'fake-jwt-token',
            };
            setUser(fakeUser);
            setLoading(false);
            console.log("Navigate to /home");
        }, 1000);
    };

    return (
        <div className='w-full h-screen flex items-center justify-center' >
            {next ? (
                <div className='w-[300px] flex flex-col items-center justify-center gap-6' >
                    <img src={Logo} width="30" alt="" />
                    <span className='text-3xl font-bold'>Enter your password</span>
                    <div type="text" className='outline-none flex flex-col items-start justify-center rounded h-14 text-lg w-full bg-black opacity-50 border-2 border-gray-600 border-opacity-50 px-4'>
                        <span className='text-xs'>Username</span>
                        <span>{username}</span>
                    </div>
                    <input autoFocus onKeyUp={e => e.key === 'Enter' ? auth() : null} onInput={e => setPassword(e.target.value)} type="password" className='outline-none rounded h-14 text-lg w-full bg-transparent transition-all focus-within:border-[#1d9bf0] border-2 border-gray-600 border-opacity-50 px-4' placeholder='Password' />
                    <button onClick={auth} className='w-full h-10 flex font-bold items-center justify-center gap-4 bg-white text-black rounded-3xl transition-all hover:bg-[#E6E6E6]'>
                        {loading ? (
                            <div className='w-4 h-4 border-gray-600 border-2 border-t-[#1d9bf0] rounded-full animate-spin'></div>
                        ) : (
                            <span>Log In</span>
                        )}
                    </button>
                </div>
            ) : (
                <div className='w-[300px] flex flex-col items-center justify-center gap-6' >
                    <img src={Logo} width="30" alt="" />
                    <span className='text-3xl font-bold'>Log in to Twitter</span>
                    <button className='w-full h-10 flex items-center justify-center gap-4 bg-white text-black rounded-3xl transition-all hover:bg-[#E6E6E6]'>
                        <img src={Google} width="20" className='rounded-full' alt="" />
                        <span>Continue with Google</span>
                    </button>
                    <button className='w-full h-10 flex items-center justify-center gap-4 bg-white text-black rounded-3xl transition-all hover:bg-[#E6E6E6]'>
                        <img src={Apple} width="20" className='rounded-full' alt="" />
                        <span>Continue with Apple</span>
                    </button>
                    <a href="/register" className='w-full h-10 flex items-center justify-center gap-4 bg-[#1d9bf0] text-white rounded-3xl transition-all hover:bg-[#1A8CD8]'>
                        <span>Sign up with email</span>
                    </a>
                    <div className='flex items-center justify-center w-full gap-3'>
                        <div className='h-[1px] bg-gray-500 bg-opacity-50 w-full'></div>
                        <span>or</span>
                        <div className='h-[1px] bg-gray-500 bg-opacity-50 w-full'></div>
                    </div>
                    <input onKeyUp={e => e.key === 'Enter' ? setNext(true) : null} onInput={e => setName(e.target.value)} type="text" className='outline-none rounded h-14 text-lg w-full bg-transparent transition-all focus-within:border-[#1d9bf0] border-2 border-gray-600 border-opacity-50 px-4' placeholder='Username' />
                    <button onClick={() => username ? setNext(true) : null} className='w-full h-10 flex items-center justify-center gap-4 bg-white text-black rounded-3xl transition-all hover:bg-[#E6E6E6]'>
                        <span>Next</span>
                    </button>
                    <button className='w-full h-10 flex items-center justify-center gap-4 bg-black text-white border-2 transition-all hover:bg-[#181919] border-gray-600 border-opacity-50 rounded-3xl'>
                        <span>Forgot your password?</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
