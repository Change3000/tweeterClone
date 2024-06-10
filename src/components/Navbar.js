import logo from '../assets/logo.png';
import HomeLogo from '../assets/home.svg';
import HashLogo from '../assets/hashtag.svg';
import NotificationLogo from '../assets/notification.svg';
import DMlogo from '../assets/message.svg';
import Profile from '../assets/profile.svg';
import More from '../assets/more.svg';
import Bookmark from '../assets/bookmark.svg';
import List from '../assets/list.svg';
import Default from '../assets/default.png';

function App() {
    const user = {
        token: true, // Simulating user authentication
        username: "example_user",
        name: "Example User",
        photo: null // User's profile photo URL
    };

    return (
        <header className='flex items-end justify-end h-screen grow w-[15%] !min-w-[15%] md:w-[46%] z-50'>
            <div className="flex flex-col items-start justify-start gap-1 fixed h-screen md:pr-8">
                <img src={logo} width='30' className='mt-3 ml-4 mb-4' alt="" />
                <div className="nav-link" onClick={() => console.log("Clicked Home")}>
                    <img src={HomeLogo} width="30" alt="" />
                    <span>Home</span>
                </div>
                <div className="nav-link" onClick={() => console.log("Clicked Explore")}>
                    <img src={HashLogo} width="30" alt="" />
                    <span>Explore</span>
                </div>
                <div className="nav-link" onClick={() => console.log("Clicked Notifications")}>
                    <img src={NotificationLogo} width="30" alt="" />
                    <span>Notifications</span>
                </div>
                <div className="nav-link" onClick={() => console.log("Clicked Messages")}>
                    <img src={DMlogo} width="30" alt="" />
                    <span>Messages</span>
                </div>
                <div className="nav-link" onClick={() => console.log("Clicked Bookmarks")}>
                    <img src={Bookmark} width="30" alt="" />
                    <span>Bookmarks</span>
                </div>
                <div className="nav-link" onClick={() => console.log("Clicked Lists")}>
                    <img src={List} width="30" alt="" />
                    <span>Lists</span>
                </div>
                <div className="nav-link" onClick={() => console.log("Clicked Profile")}>
                    <img src={Profile} width="30" alt="" />
                    <span>Profile</span>
                </div>
                <div className="nav-link" onClick={() => console.log("Clicked More")}>
                    <img src={More} width="30" alt="" />
                    <span>More</span>
                </div>
                <a href='#' className='bg-[#1d9bf0] hover:bg-[#1A8CD8] transition-all w-60 h-12 hidden md:flex items-center justify-center rounded-3xl mt-3'>
                    <span className='font-bold text-lg'>Tweet</span>
                </a>
                <div className='flex items-center justify-start mt-auto mb-1 relative bottom-3 px-4 py-2 cursor-pointer gap-3 hover:bg-[#181818] transition-all rounded-[30px] w-full'>
                    <img src={user?.photo ? user?.photo : Default} width="40" className='rounded-full' alt="" />
                    <div className='hidden md:flex flex-col items-start justify-start'>
                        <span className='font-bold'>{user?.name}</span>
                        <span className='text-sm text-gray-500'>@{user?.username}</span>
                    </div>
                    <img src={More} width="20" className='right-2 absolute hidden md:block' alt="" />
                </div>
            </div>
        </header>
    );
}

export default App;
