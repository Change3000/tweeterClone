import React, { useEffect, useState } from 'react';
import shine from '../assets/shine.svg';
import Hashtags from '../components/suggestions/Hashtags';
import SearchComp from '../components/suggestions/Search';
import UsersBox from '../components/suggestions/UsersBox';
import Tweet from '../components/Tweet';
import CreateTweet from '../components/createTweet';
import Loading from '../components/Loading';

function App() {
    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(true);

    const refresh = () => {
        // Simulating fetching data
        setTimeout(() => {
            const mockData = [
                { user: 'user1', content: 'Tweet 1', date: '2024-06-10' },
                { user: 'user2', content: 'Tweet 2', date: '2024-06-09' },
                { user: 'user3', content: 'Tweet 3', date: '2024-06-08' },
            ];
            setTweets(mockData);
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        refresh();
    }, []);

    return (
        <main className='w-full flex items-start'>
            <div className='min-w-full md:w-[990px] md:min-w-max relative'>
                <div className='w-full flex items-end justify-end gap-10'>
                    <div id='tweets' className='border-l md:w-[592px] w-full border-l-gray-500 border-r border-r-gray-500 border-opacity-50 self-start flex flex-col items-center'>
                        <div id='topbar' className='w-full relative h-[53px] flex items-center justify-center z-30'>
                            <div className='flex items-center justify-between h-[53px] fixed w-[85%] md:w-[31%] px-4' style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
                                <span className='font-bold text-xl'>Home</span>
                                <img src={shine} width='30' alt='' />
                            </div>
                        </div>

                        {<CreateTweet refresh={refresh} />}

                        <div className='w-full flex flex-col min-h-screen'>
                            {loading ? (
                                <Loading />
                            ) : (
                                tweets.map((tweet, index) => {
                                    return <Tweet key={index} id={tweet.user} content={tweet.content} date={tweet.date} />;
                                })
                            )}
                        </div>
                    </div>

                    <div id='tags' className='!w-[350px] !min-w-[350px] hidden md:flex flex-col mr-[10px] gap-4 self-start'>
                        <SearchComp />
                        <div className='w-full !h-11 mb-2'></div>
                        <Hashtags />
                        <UsersBox title='Who to follow' />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
