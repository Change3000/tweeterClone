import { useState } from "react";

function App({ active, user, followersCallback, followingCallback }) {
    const [fLoading, setfLoading] = useState(false);
    const [text, setText] = useState("Following");
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);

    useState(() => {
        if (user) {
            setFollowers(user.followers);
            setFollowing(user.following);
        }
    }, [user]);

    const follow = () => {
        if (fLoading) return;

        // Simulating follow action
        const fToFollowing = [...following, user.id];
        const fToFollowers = [...followers, user.id];

        if (followersCallback) followersCallback(fToFollowers);
        if (followingCallback) followingCallback(fToFollowing);

        setFollowing(fToFollowing);
        setFollowers(fToFollowers);

        setfLoading(true);
        setTimeout(() => {
            setfLoading(false);
        }, 1000);
    };

    if (active) {
        return (
            <div className='!w-32 h-8 flex items-center justify-center'>
                <div className="ml-auto">
                    {followers.includes(`${user.id}`) ?
                        <button onMouseEnter={() => setText("Unfollow")} onMouseLeave={() => setText("Following")} onClick={follow} className='w-[120px] h-[30px] rounded-3xl border border-gray-600 flex items-center justify-center transition-all ml-auto hover:bg-red-600 hover:bg-opacity-10'>
                            {fLoading ?
                                <div className='w-4 h-4 border-2 border-gray-600 border-t-[#1d9bf0] animate-spin rounded-full'></div> :
                                <span className='text-white text-sm font-semibold'>{text}</span>
                            }
                        </button> :
                        <button onClick={follow} className='w-[87px] h-[32px] rounded-3xl bg-white flex items-center justify-center transition-all ml-auto hover:bg-[#EFF3F4]'>
                            {fLoading ?
                                <div className='w-4 h-4 border-2 border-gray-600 border-t-[#1d9bf0] animate-spin rounded-full'></div> :
                                <span className='text-[#0F1419] text-sm font-semibold'>Follow</span>
                            }
                        </button>
                    }
                </div>
            </div>
        );
    }
}

export default App;
