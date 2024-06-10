import React, { useEffect, useState } from 'react';
//import axios from '../utils/axios';
//import CryptoJS from 'crypto-js';
//import { loginUser } from '../api/requests/requests';

import Logo from '../assets/logo.png';
import Google from '../assets/google.png';
import Apple from '../assets/apple.svg';

function App() {
    const [next, setNext] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // handle navigation logic 
    }, []);

    const auth = () => {
        if (loading) return;
        if (!username || !password) return;

        // const cryptedName = CryptoJS.AES.encrypt(username, import.meta.env.VITE_SECRET_KEY).toString();
        // const cryptedPswrd = CryptoJS.AES.encrypt(password, import.meta.env.VITE_SECRET_KEY).toString();

        let sendToData = {
            // username: cryptedName,
            // password: cryptedPswrd
            username,
            password
        };

        const response = (data) => {
            // Handle successful login response here
        };

        //loginUser(sendToData, response, setLoading);
    };

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            {next ? (
                <div className='auth-container'>
                    <img src={Logo} width="30" alt="" />
                    <span className='text-3xl font-bold'>Şifreni gir</span>
                    <div className='input-container'>
                        <span className='text-xs'>Kullanıcı adı</span>
                        <span>{username}</span>
                    </div>
                    <input autoFocus onKeyUp={e => e.key === 'Enter' ? auth() : false} onInput={e => setPassword(e.target.value)} type="password" className='input' placeholder='Şifre' />
                    <button onClick={auth} className='button'>
                        {loading ? (
                            <div className='spinner'></div>
                        ) : (
                            <span>Giriş yap</span>
                        )}
                    </button>
                </div>
            ) : (
                <div className='auth-container'>
                    <img src={Logo} width="30" alt="" />
                    <span className='text-3xl font-bold'>Twitter'a giriş yap</span>
                    <button className='button'>
                        <img src={Google} width="20" className='rounded-full' alt="" />
                        <span>Google ile devam et</span>
                    </button>
                    <button className='button'>
                        <img src={Apple} width="20" className='rounded-full' alt="" />
                        <span>Apple ile devam et</span>
                    </button>
                    <div className='separator'>
                        <div className='line'></div>
                        <span>veya</span>
                        <div className='line'></div>
                    </div>
                    <input onKeyUp={e => e.key === 'Enter' ? setNext(true) : false} onInput={e => setUsername(e.target.value)} type="text" className='input' placeholder='Kullanıcı Adı' />
                    <button onClick={() => username ? setNext(true) : false} className='button'>
                        <span>İleri</span>
                    </button>
                    <button className='button forgot-password'>
                        <span>Şifreni mi Unuttun?</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
