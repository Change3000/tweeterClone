import Dropdown from '../assets/dropdown.svg';
//import CryptoJS from 'crypto-js';
import { useState } from 'react';
//import { registerUser } from '../api/requests/requests';


function App() {
    const [username, setUsername] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [loading, setLoading] = useState(false);

    const createAccount = () => {
        if (!username || !name || !password || !email || loading) return;
        // const encryptedPassword = CryptoJS.AES.encrypt(password, import.meta.env.VITE_SECRET_KEY).toString();
        
        let sendData = {
            // password: encryptedPassword,
            username,
            name,
            email
        };

        const response = (data) => {
            if (!data || !data?.username) return;
            // Handle navigation logic here if needed
        };

        // Simulating API call with setTimeout
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    return (
        <div className='w-full h-screen flex items-center justify-center'>

            <div className='w-[300px] flex flex-col items-center justify-center gap-6'>
                <span className='text-3xl font-bold'>Create My Account</span>
                <input type="text"
                    onInput={e => setName(e.target.value)}
                    className='outline-none rounded h-14 text-lg w-full bg-transparent transition-all focus-within:border-[#1d9bf0] border-2 border-gray-600 border-opacity-50 px-4'
                    placeholder='Your Name' />
                {/* Other input elements */}
                
                <button onClick={createAccount} className='w-full h-10 flex items-center justify-center gap-4 bg-white text-black rounded-3xl transition-all hover:bg-[#E6E6E6]'>
                    {loading ?
                        <div className='w-5 h-5 border-2 border-gray-600 animate-spin rounded-full border-t-[#1d9bf0]'></div> :
                        <span>Next</span>
                    }
                </button>
            </div>

        </div>
    );
}

export default App;
