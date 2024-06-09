import React, { useState } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import Feed from './components/Feed';

function App() {
  const [tweets, setTweets] = useState([
    { id: 1, content: "Hello World!", comments: [], likes: 0 },
    { id: 2, content: "My first tweet!", comments: [], likes: 0 }
  ]);

  const addTweet = (tweetContent) => {
    setTweets([...tweets, { id: tweets.length + 1, content: tweetContent, comments: [], likes: 0 }]);
  };

  const addComment = (tweetId, comment) => {
    setTweets(tweets.map(tweet => tweet.id === tweetId ? { ...tweet, comments: [...tweet.comments, comment] } : tweet));
  };

  const likeTweet = (tweetId) => {
    setTweets(tweets.map(tweet => tweet.id === tweetId ? { ...tweet, likes: tweet.likes + 1 } : tweet));
  };

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Sidebar />
        <Feed tweets={tweets} addTweet={addTweet} addComment={addComment} likeTweet={likeTweet} />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;