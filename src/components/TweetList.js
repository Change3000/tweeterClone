import React from 'react';
import './TweetList.css';
import Tweet from './Tweet';

function TweetList({ tweets, addComment, likeTweet }) {
  return (
    <div className="tweet-list">
      {tweets.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet} addComment={addComment} likeTweet={likeTweet} />
      ))}
    </div>
  );
}

export default TweetList;
