import React from 'react';
import './Feed.css';
import NewTweet from './Tweet';
import TweetList from './TweetList';

function Feed({ tweets, addTweet, addComment, likeTweet }) {
  return (
    <div className="feed">
      <div className="feed-header">Home</div>
      <NewTweet addTweet={addTweet} />
      <TweetList tweets={tweets} addComment={addComment} likeTweet={likeTweet} />
    </div>
  );
}

export default Feed;
