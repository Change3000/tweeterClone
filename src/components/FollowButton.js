import { useState } from "react";

function App({ active }) {
    const [fLoading, setfLoading] = useState(false);
    const [text, setText] = useState("Following");
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);

    const follow = () => {
        if (fLoading) return;
        // Simulate follow action
        console.log("Simulated follow action");
        // Update state to simulate changes
        setfLoading(true);
        setTimeout(() => {
            setfLoading(false);
            const updatedFollowers = [...followers, "new_follower"];
            setFollowers(updatedFollowers);
            const updatedFollowing = [...following, "new_following"];
            setFollowing(updatedFollowing);
        }, 1000);
    };

    if (active) {
        return (
            <div className='!w-32 h-8 flex items-center justify-center'>
                <div className="ml-auto">
                    <button onClick={follow} className='w-[87px] h-[32px] rounded-3xl bg-white flex items-center justify-center transition-all ml-auto hover:bg-[#EFF3F4]'>
                        {fLoading ?
                            <div className='w-4 h-4 border-2 border-gray-600 border-t-[#1d9bf0] animate-spin rounded-full' /> :
                            <span className='text-[#0F1419] text-sm font-semibold'>Follow</span>
                        }
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
