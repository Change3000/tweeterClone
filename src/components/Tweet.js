import React, { useState } from 'react';
import './Tweet.css';
import Comment from './Comment';

function Tweet({ tweet, addComment, likeTweet }) {
  const [commentContent, setCommentContent] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentContent.trim() !== '') {
      addComment(tweet.id, commentContent);
      setCommentContent('');
    }
  };

  return (
    <div className="tweet-container">
      <div className="tweet-content">{tweet.content}</div>
      <div className="tweet-actions">
        <button onClick={() => likeTweet(tweet.id)} className="tweet-action">Like {tweet.likes}</button>
        <button className="tweet-action">Comment</button>
      </div>
      <div className="tweet-comments">
        {tweet.comments.map((comment, index) => (
          <Comment key={index} content={comment} />
        ))}
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            placeholder="Add a comment..."
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}

export default Tweet;
